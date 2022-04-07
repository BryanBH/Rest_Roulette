// import firebase, { getApp } from 'firebase/app';
// import "firebase/auth";

// import { getFirestore, doc, setDoc } from 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import {
//     collection, doc, getDoc, writeBatch, updateDoc, deleteDoc, onSnapshot, query, limit
// } from '@firebase/firestore'


// import { initializeApp } from 'firebase/app';


// const firebaseApp = firebase.initializeApp ({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// });

const firebaseApp =firebase.initializeApp ({
    apiKey: "AIzaSyCE98gXQqobnuiW6CUYAm0xoh0ThRLh3fI",
    authDomain: "rest-roulette-4c522.firebaseapp.com",
    projectId: "rest-roulette-4c522",
    storageBucket: "rest-roulette-4c522.appspot.com",
    messagingSenderId: "274195625299",
    appId: "1:274195625299:web:d21550d72cc0cbf83d1da6"
})

// firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export default firebaseApp



// const firestore = getFirestore(firebaseApp);

// const user = doc(firestore, 'users/KedDfMVeqNfOJ0FnS037');

// function writeUsers() {
//     const docData = {
//         Email: "obssuthk@wit.edu",
//         Password: '123',
//         Name: 'Kevin',
//     };
//     setDoc(user,docData);
// }


// console.log("hello");
// writeUsers();





