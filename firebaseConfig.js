// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyB4AkwrVW72FLZ0tIBLW1_-taOiCdWn044",
    authDomain: "audioschool-cdefd.firebaseapp.com",
    projectId: "audioschool-cdefd",
    storageBucket: "audioschool-cdefd.appspot.com",
    messagingSenderId: "215551065927",
    appId: "1:215551065927:web:fc6cc84cdccd837dbd5662",
    measurementId: "G-S8YHFYK6H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

const createNew = (auth, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
};


async function loginwemp(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in");
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  }
  
}

async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        return { uid: user.uid, displayName: user.displayName, photoURL: user.photoURL };
    } catch (error) {
        if (error.code !== "auth/cancelled-popup-request") {
            console.error(error);
        }

        return null;
    }
}


export { auth, loginWithGoogle, createNew, loginwemp, onAuthStateChanged, provider };
