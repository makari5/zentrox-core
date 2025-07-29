import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAQ9vqIKG8zoz7MptJR7QZWQAE_1oI93Lg",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ghfh-82837.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ghfh-82837",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ghfh-82837.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "448665976016",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:448665976016:web:76e289fd27de8d59dd32d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);

export default app; 