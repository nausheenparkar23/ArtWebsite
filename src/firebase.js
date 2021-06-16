import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDxyqc_kTbYENRHOfzSkatfyF2XFeW6Bb0",
    authDomain: "artwebsite-f1555.firebaseapp.com",
    projectId: "artwebsite-f1555",
    storageBucket: "artwebsite-f1555.appspot.com",
    messagingSenderId: "54564756673",
    appId: "1:54564756673:web:65ae1fb8925fee7d344840",
    measurementId: "G-9M6Z734MP8"
  });

  const db = firebaseApp.firestore(); //var
  const auth= firebase.auth();
  const storage= firebase.storage();
  

//export default firebaseApp;
  export { auth, db, storage };