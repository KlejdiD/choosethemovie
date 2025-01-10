import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

// Sign Up
const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => console.log("User signed up:", userCredential.user))
    .catch((error) => console.error(error));
};

// Log In
const logIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => console.log("User logged in:", userCredential.user))
    .catch((error) => console.error(error));
};
