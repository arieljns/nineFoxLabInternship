import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
import { UserProvider } from "./context/context";

const firebaseConfig = {
  apiKey: "AIzaSyDiaAkr2SINU4z1gLdMjMkkomS7C-v9WAo",
  authDomain: "crown-clothing-c4943.firebaseapp.com",
  projectId: "crown-clothing-c4943",
  storageBucket: "crown-clothing-c4943.appspot.com",
  messagingSenderId: "52982240524",
  appId: "1:52982240524:web:c5a26b02148a5f1a18a529",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

//Intialize firestore database
const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  additionalInformation = { displayName: "" };
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    //creating the new object
    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log(err, err.message);
    }
  } else {
    return userDocRef;
  }
};

export const createAuthWithEmailAndPassword = async (auth, email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async (auth) => signOut(auth);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
