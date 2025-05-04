import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAK4a9H9h8CEAw5la8L-Oo1J9WJUzZ3Dtg",
  authDomain: "caupolican-aeddc.firebaseapp.com",
  projectId: "caupolican-aeddc",
  storageBucket: "caupolican-aeddc.firebasestorage.app",
  messagingSenderId: "859590480559",
  appId: "1:859590480559:web:73cf0a1eefc43cd144ba5a",
  measurementId: "G-MKBLM64B89"
};

export const app = initializeApp(firebaseConfig);

export default app;