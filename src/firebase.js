import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-kzoor9chZhumUAeACbdB9RIXiu7e_xc",
    authDomain: "react-slack-clone-ab50b.firebaseapp.com",
    databaseURL: "https://react-slack-clone-ab50b.firebaseio.com",
    projectId: "react-slack-clone-ab50b",
    storageBucket: "react-slack-clone-ab50b.appspot.com",
    messagingSenderId: "1082869503681",
    appId: "1:1082869503681:web:1682f8073c764d3dff6640"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Initialise Auth
export const auth = firebase.auth();
//To allow sign in with Google
export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
}