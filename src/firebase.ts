import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCc4JmzB0wJouZwYLpRjP90A8u_-F8de_A",
  authDomain: "nneurogrowth-hub-6bd01.firebaseapp.com",
  databaseURL: "https://neurogrowth-hub-6bd01-default-rtdb.firebaseio.com",
  projectId: "neurogrowth-hub-6bd01",
  storageBucket: "neurogrowth-hub-6bd01.firebasestorage.app",
  messagingSenderId: "703506398476",
  appId: "1:703506398476:web:acf6a657a7c90701ff1d29"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);