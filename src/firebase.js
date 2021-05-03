import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBAFQOd7oHBjV7X5LTez_GBXuuZ1DR0Bbo",
    authDomain: "notes-1-fcf7e.firebaseapp.com",
    projectId: "notes-1-fcf7e",
    storageBucket: "notes-1-fcf7e.appspot.com",
    messagingSenderId: "719776996767",
    appId: "1:719776996767:web:13b607e596b33a7d42f1aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const auth = firebase.auth();