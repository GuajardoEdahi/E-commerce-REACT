import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAdVbiHMPc1fpbSNMa_eboi7Q8PuD9pSCY",
    authDomain: "e-comerce-react-656ba.firebaseapp.com",
    projectId: "e-comerce-react-656ba",
    storageBucket: "e-comerce-react-656ba.appspot.com",
    messagingSenderId: "1094749977082",
    appId: "1:1094749977082:web:8f0a0a4fd0bd963b81cc43",
    measurementId: "G-D1GR04QZ8X"
  };

  firebase.initializeApp(config);

  export const auth =  firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;