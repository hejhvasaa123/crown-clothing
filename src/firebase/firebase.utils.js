import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9ZUBvm4Gv_nf78GiOfWLtoSPFqEM44hc",
    authDomain: "crwn-db-9870f.firebaseapp.com",
    databaseURL: "https://crwn-db-9870f.firebaseio.com",
    projectId: "crwn-db-9870f",
    storageBucket: "crwn-db-9870f.appspot.com",
    messagingSenderId: "889338160500",
    appId: "1:889338160500:web:6b8b2ec06588365b81b821"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await.userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;