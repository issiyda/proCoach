// interface
import { TwitterUser } from '@/types/firebase';

// firebase
import { getDownloadURL, ref, getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, addDoc, getDocs, collection } from 'firebase/firestore';

export const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
};

const app = initializeApp(config);

const db = getFirestore(app);

// fireStore
export const writeTwitterUser = async (requestData: TwitterUser) => {
  await addDoc(collection(db, 'twitter'), {
    name: requestData.name,
    twitterId: requestData.twitterId,
  });
};

export const getFireStoreData = async (path: string) => {
  return await getDocs(collection(db, path));
};

export const getTwitterUser = async () => {
  return await getDocs(collection(db, 'twitter'));
};

// storage
export const getStorageData = async (path: string) => {
  const app = initializeApp(config);
  const storageRef = await getStorage(app, path);
  const data = await getDownloadURL(ref(storageRef, '/Bロール.png'));
  return data;
};

// auth周り
export const getFirebaseAuth = getAuth();
export const getUserEmail = getAuth().currentUser?.email;
export const firebaseAuth = (email: string, password: string) => {
  return signInWithEmailAndPassword(getFirebaseAuth, email, password);
};
