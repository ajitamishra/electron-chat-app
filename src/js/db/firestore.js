// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase/app';
  import 'firebase/firestore'
  var config = {
    apiKey: "AIzaSyDlWubB137a53Lj2Su3aGGWodTCatWvIYs",
    authDomain: "electron-chat-912ac.firebaseapp.com",
    projectId: "electron-chat-912ac",
    storageBucket: "electron-chat-912ac.appspot.com",
    messagingSenderId: "956750928360",
    appId: "1:956750928360:web:32e0c53f78b17bd17dec5d",
    measurementId: "G-6HLPZ1MKV0"
  };
  // Initialize Firebase
  export default firebase.initializeApp(config).firestore();
  