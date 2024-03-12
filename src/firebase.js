import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJj1MdrvcfZCLMpB5-LL0wdPGzuFkdyvw",
    authDomain: "clone-f0d82.firebaseapp.com",
    projectId: "clone-f0d82",
    storageBucket: "clone-f0d82.appspot.com",
    messagingSenderId: "438206511098",
    appId: "1:438206511098:web:deb2a2706787142d5ed643",
    measurementId: "G-3PZ4ZFRKYX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };