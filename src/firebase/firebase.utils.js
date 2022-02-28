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
    
    export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };
      
      export const auth = firebase.auth();
      export const firestore = firebase.firestore();
      
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      export const signInWithGoogle = () => auth.signInWithPopup(provider);
      
      export default firebase;

