// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);