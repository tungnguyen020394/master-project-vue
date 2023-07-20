import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAY1ItUCJdTFZ-xSCiJ9zJGFs8vVoqUc9A",
    authDomain: "musicapp-df362.firebaseapp.com",
    projectId: "musicapp-df362",
    storageBucket: "musicapp-df362.appspot.com",
    messagingSenderId: "846638157770",
    appId: "1:846638157770:web:6aadf6629d7f593954c933"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
    auth,
    db,
    usersCollection
};