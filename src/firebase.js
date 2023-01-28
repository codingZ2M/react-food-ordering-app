import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup,
        signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALg-p7-WVPY0S3k2hsXHU5DCF3IJJ8H-4",
    authDomain: "react-food-ordering-app-85206.firebaseapp.com",
    projectId: "react-food-ordering-app-85206",
    storageBucket: "react-food-ordering-app-85206.appspot.com",
    messagingSenderId: "561554051884",
    appId: "1:561554051884:web:4a90488615c556d2695289",
    measurementId: "G-E06PKYE1QW"
  };

// Initialize Firebase
const app = initializeApp( firebaseConfig );

// Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export {auth, provider, signInWithPopup, onAuthStateChanged, signOut,
     createUserWithEmailAndPassword, signInWithEmailAndPassword  }