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
//Initialise Firestore
export const firestore = firebase.firestore();
//To allow sign in with Google
export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
}
export const signOut = () => {
    auth.signOut();
}
export const createOrGetUserProfileDocument = async (user) => {
    if (!user) {
        return;
    }
    // If user is existing the path 'users/${user.uid}' 
    const userRef = firestore.doc(`users/${user.uid}`);
    //If user exists we get the data.
    const snapshot = await userRef.get();
    //Creating a new user if the user doesn't exist
    if (!snapshot.exists) {
        const { displayName, email, photoURL } = user;
        try {
            const user = {
                display_name: displayName,
                email,
                photo_url: photoURL,
                created_at: new Date()
            };
            await userRef.set(user);
        }
        catch (error) {
            console.log('Error', error);
        }
    }
    return getUserDocument(user.uid);
}
async function getUserDocument(uid) {
    if (!uid) {
        return null;
    }
    try {
        const UserDocument = await firestore.collection('users').doc(uid);
        return UserDocument;
    }
    catch (error) {
        console.log(error);
    }
}