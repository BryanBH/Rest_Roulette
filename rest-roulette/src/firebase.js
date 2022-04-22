import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from "firebase/firestore"


/**
 * Initializing firebase
 */
const firebaseApp =firebase.initializeApp ({
    apiKey: "AIzaSyCE98gXQqobnuiW6CUYAm0xoh0ThRLh3fI",
    authDomain: "rest-roulette-4c522.firebaseapp.com",
    projectId: "rest-roulette-4c522",
    storageBucket: "rest-roulette-4c522.appspot.com",
    messagingSenderId: "274195625299",
    appId: "1:274195625299:web:d21550d72cc0cbf83d1da6"
})


export const auth = firebaseApp.auth();
export const database = getFirestore(firebaseApp);
export default firebaseApp





