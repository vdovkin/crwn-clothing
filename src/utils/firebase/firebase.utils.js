import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithGoPopup,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxeQbj67bqHgUE4lPdISz3MoW-vSKDXvo",
  authDomain: "crwn-clothing-db-61ba4.firebaseapp.com",
  projectId: "crwn-clothing-db-61ba4",
  storageBucket: "crwn-clothing-db-61ba4.appspot.com",
  messagingSenderId: "249397941036",
  appId: "1:249397941036:web:62a4aa859c1dd4a6e69289",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});

export const auth = getAuth();
export const sighInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
