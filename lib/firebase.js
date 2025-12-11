// app/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "ISI PUNYA KAMU",
  authDomain: "ISI PUNYA KAMU",
  projectId: "ISI PUNYA KAMU",
  storageBucket: "ISI PUNYA KAMU",
  messagingSenderId: "ISI PUNYA KAMU",
  appId: "ISI PUNYA KAMU"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
