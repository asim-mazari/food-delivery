// src/context/ConfigurationContext.tsx
"use client";

import React, { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { getConfiguration } from '@/apollo/server'; // Adjust path as necessary

// Define the GraphQL query
const GET_CONFIGURATION = gql`
  ${getConfiguration}
`;

interface ConfigurationContextProps {
  configuration: Record<string, any>;
}

const ConfigurationContext = createContext<ConfigurationContextProps | undefined>(undefined);

export const ConfigurationProvider = ({ children }: { children: ReactNode }) => {
  const [configuration, setConfiguration] = useState<Record<string, any>>({});
  const [fetchConfiguration, { data, loading, error }] = useLazyQuery(GET_CONFIGURATION);

  useEffect(() => {
    fetchConfiguration();
  }, [fetchConfiguration]);


  useEffect(() => {
    if (!loading && !error && data && data.configuration) {
      setConfiguration(data.configuration);
    }
  }, [loading, error, data]);

  return (
    <ConfigurationContext.Provider value={{ configuration }}>
      {children}
    </ConfigurationContext.Provider>
  );
};

// Hook to access the configuration context
export const useConfiguration = () => {
  const context = useContext(ConfigurationContext);
  if (context === undefined) {
    throw new Error('useConfiguration must be used within a ConfigurationProvider');
  }
  return context;
};

export default ConfigurationContext;
