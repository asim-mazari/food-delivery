import { initializeApp, FirebaseApp, getApps } from 'firebase/app';
import { getMessaging, isSupported, Messaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyDx_iSQ9LroTF7NMm20aRvw2wJqhwSnJ3U',
  authDomain: 'enatega-multivender-web.firebaseapp.com',
  projectId: 'enatega-multivender-web',
  storageBucket: 'enatega-multivender-web.appspot.com',
  messagingSenderId: '438532750182',
  appId: '1:438532750182:web:516b850eff4e0349f0a6a7',
  measurementId: 'G-KLBJSEHRYQ',
};

let messaging: Messaging | undefined;

export const initializeFirebase = (): Messaging | undefined => {

  if (!getApps().length) {
    const app: FirebaseApp = initializeApp(firebaseConfig);
    if (typeof window !== 'undefined') {
      messaging = getMessaging(app);
    }
  }
  return messaging;
};

export const isFirebaseSupported = async (): Promise<boolean> => {
  if (typeof window !== 'undefined') {
    return await isSupported();
  }
  return false;
};
