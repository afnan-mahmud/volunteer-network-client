// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzV39YrhBuO1UnRjPHkKgfeLtG7z70-dE",
  authDomain: "volunteer-network-e1a14.firebaseapp.com",
  projectId: "volunteer-network-e1a14",
  storageBucket: "volunteer-network-e1a14.appspot.com",
  messagingSenderId: "757416093410",
  appId: "1:757416093410:web:470bc423c6fe9fad6fa0bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const signUpwithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ...
    });
};
