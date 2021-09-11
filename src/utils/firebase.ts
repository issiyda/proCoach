import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

let app = {
  apps: [],
};

if (!app.apps.length) {
  console.log('app.apps.length', app.apps.length);
  initializeApp(config);
}

export const getFirebaseAuth = getAuth();
export const getUserEmail = getAuth().currentUser?.email;

export const firebaseAuth = (email: string, password: string) => {
  return signInWithEmailAndPassword(getFirebaseAuth, email, password);
};
