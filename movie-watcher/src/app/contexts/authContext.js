// src/contexts/authContext.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
//import { auth } from "../firebase/firebaseConfig"; // Import the initialized auth



// Sign Up
export const signUp = (email, password, confirmPassword, name, lastName) => {
  if (password !== confirmPassword) {
    console.error("Passwords do not match");
    return;
  }
// Initialize Firestore
const db = getFirestore();

// Store additional info in Firestore (like first name and last name)
const storeUserProfileInFirestore = async (userId, name, lastName) => {
  try {
    await setDoc(doc(db, "users", userId), {
      firstName: name,
      lastName: lastName,
    });
    console.log("User profile saved to Firestore.");
  } catch (error) {
    console.error("Error saving profile to Firestore:", error);
  }
};

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Update the user's profile with their name and last name
      updateProfile(user, {
        displayName: `${name} ${lastName}`,
      })
        .then(() => {
          console.log("User signed up and profile updated:", user);
         // Save to Firestore after updating profile
        storeUserProfileInFirestore(user.uid, name, lastName);
        s})
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    })
    .catch((error) => {
      console.error("Error signing up:", error);
    });
};

// Log In
export const logIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User logged in:", userCredential.user);
    })
    .catch((error) => console.error("Error logging in:", error));
};
