import firebase from 'firebase'
require('@firebase/firestore') 
  var firebaseConfig = {
    apiKey: "AIzaSyChaqAIqYs97S_alE3lQ9U6e4sqXHA23AI",
    authDomain: "booksanta-2cc34.firebaseapp.com",
    databaseURL: "https://booksanta-2cc34.firebaseio.com",
    projectId: "booksanta-2cc34",
    storageBucket: "booksanta-2cc34.appspot.com",
    messagingSenderId: "110825243316",
    appId: "1:110825243316:web:df0aab38a043275b780de1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()