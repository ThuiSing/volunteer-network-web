import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../firebase/firebaseInit";

firebaseInit();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  //sign in with Google
  const googleLogIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  //get current user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
      }
    });
  }, []);

  //logOut
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    user,
    setUser,
    googleLogIn,
    userSignOut,
  };
};
export default useFirebase;
