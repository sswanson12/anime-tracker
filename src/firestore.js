import firebase from "firebase/compat";
// Firebase Config

const firebaseConfig = {
    apiKey: "AIzaSyC9eVZLV-gnSATDkoqxdaZEDGkyKXYnBmg",
    authDomain: "animetracker-abbf9.firebaseapp.com",
    projectId: "animetracker-abbf9",
    storageBucket: "animetracker-abbf9.appspot.com",
    messagingSenderId: "576112910998",
    appId: "1:576112910998:web:7a275a1124955cba0098b7"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage().ref();

export { db, storage }