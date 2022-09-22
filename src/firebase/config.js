import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyB7vpl8OJ7D8FoPk4nTGI1YFr22B3BMslQ",
  authDomain: "fantastk-7ee16.firebaseapp.com",
  projectId: "fantastk-7ee16",
  storageBucket: "fantastk-7ee16.appspot.com",
  messagingSenderId: "350236089595",
  appId: "1:350236089595:web:07885e183acd6fd695a45e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;

