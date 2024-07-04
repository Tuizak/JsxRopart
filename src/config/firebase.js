import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore, FieldValue } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB_6fmxqqw_9PGGWkoM6mciF_w0qTZDrfs",
  authDomain: "ropart-bd824.firebaseapp.com",
  projectId: "ropart-bd824",
  storageBucket: "ropart-bd824.appspot.com",
  messagingSenderId: "884433315121",
  appId: "1:884433315121:web:8785f8a7bc124ff943fc10",
};


const app = initializeApp(firebaseConfig);


export const authApp = getAuth(app);
export const storageApp = getStorage(app);
export const firestoreApp = getFirestore(app);
export const timestamp = FieldValue.serverTimestamp;
