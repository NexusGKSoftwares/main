import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoI5a6pD8NHeYmtX6DxD4XVgG1zj2FDF4",
  authDomain: "portfolio-b9d11.firebaseapp.com",
  projectId: "portfolio-b9d11",
  storageBucket: "portfolio-b9d11.firebasestorage.app",
  messagingSenderId: "752931941262",
  appId: "1:752931941262:web:0746c76c8c9caa7e1612df",
  measurementId: "G-5DTCZ90XGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };