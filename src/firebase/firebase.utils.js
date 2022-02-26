import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {
        apiKey: "AIzaSyChpTFPMOjCS4SBKSkibuLB0hvFPwVP9Nw",
        authDomain: "crwn-db-3cf15.firebaseapp.com",
        projectId: "crwn-db-3cf15",
        storageBucket: "crwn-db-3cf15.appspot.com",
        messagingSenderId: "179379993970",
        appId: "1:179379993970:web:28ba45321ddeddffb8f1eb",
        measurementId: "G-NJLEQYPHC8"
    };

    firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

