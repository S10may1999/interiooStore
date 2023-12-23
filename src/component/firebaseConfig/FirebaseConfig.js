import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQkCPu-0VVLtreOEbq-cfN6o-oJLGdRvk",
    authDomain: "interioo-ecbb8.firebaseapp.com",
    projectId: "interioo-ecbb8",
    storageBucket: "interioo-ecbb8.appspot.com",
    messagingSenderId: "292582830990",
    appId: "1:292582830990:web:ae0627e864e37e14c8eadf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;