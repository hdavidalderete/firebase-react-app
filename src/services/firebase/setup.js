import firebase from 'firebase';
import * as firebaseui from 'firebaseui'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTvvv7VlvYxLOQyuFuqSxsrSsP9f_-mkw",
    authDomain: "fir-react-test-5b0da.firebaseapp.com",
    databaseURL: "https://fir-react-test-5b0da.firebaseio.com",
    projectId: "fir-react-test-5b0da",
    storageBucket: "fir-react-test-5b0da.appspot.com",
    messagingSenderId: "444364853212",
    appId: "1:444364853212:web:0be5a1b70e8d7e83320919",
    measurementId: "G-GXYG70K8HX"
};

// FirebaseUI config.
const uiConfig = {
    signInSuccessUrl: '/dashboard',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const startUi = (elementId) => {
    const ui = new firebaseui.auth.AuthUI(auth);
    ui.start(elementId, uiConfig);
}