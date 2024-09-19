
import {
    ApolloClient,
    ApolloLink,
    concat,
    createHttpLink,
    InMemoryCache,
    Observable,
    split,
  } from '@apollo/client';
  import { getMainDefinition } from '@apollo/client/utilities';
  import { WebSocketLink } from '@apollo/client/link/ws';
  import { SERVER_URL,WS_SERVER_URL } from '@/config/contsants';

  

  const httpLink = createHttpLink({
    uri: `${SERVER_URL}graphql`,
  });
  

  const wsLink = typeof window !== 'undefined' ? new WebSocketLink({
    uri: `${WS_SERVER_URL}graphql`,
    options: {
      reconnect: true,
    },
  }) : null; 
  

  const request = async (operation: any) => {
    if (typeof window === 'undefined') return;
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  };
  
  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable((observer) => {
        let handle: any;
        Promise.resolve(operation)
          .then((oper) => request(oper))
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            });
          })
          .catch(observer.error.bind(observer));
  
        return () => {
          if (handle) handle.unsubscribe();
        };
      })
  );
  
  const splitLink = typeof window !== 'undefined' && wsLink
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;
  
  const client = new ApolloClient({
    link: concat(requestLink, splitLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  
  export default client;
  