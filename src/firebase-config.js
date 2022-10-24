import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCIan0hJVd5cDNVkQTmVYhcJDM0LabOdKw",
  authDomain: "react-crud-988da.firebaseapp.com",
  projectId: "react-crud-988da",
  storageBucket: "react-crud-988da.appspot.com",
  messagingSenderId: "264304735539",
  appId: "1:264304735539:web:9f7a1018537fd98d7f3a46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);