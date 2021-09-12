// interface
import { TwitterUser } from '@/types/firebase';

// firebase
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  getFirestore,
  addDoc,
  doc,
  getDocs,
  collection,
} from 'firebase/firestore';

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
  initializeApp(config);
}

const db = getFirestore();

// fireStore
export const writeTwitterUser = async (requestData: TwitterUser) => {
  await addDoc(collection(db, 'twitter'), {
    name: requestData.name,
    twitterId: requestData.twitterId,
  });
};

export const getTwitterUser = async () => {
  return await getDocs(collection(db, 'twitter'));
};

// auth周り
export const getFirebaseAuth = getAuth();
export const getUserEmail = getAuth().currentUser?.email;
export const firebaseAuth = (email: string, password: string) => {
  return signInWithEmailAndPassword(getFirebaseAuth, email, password);
};
