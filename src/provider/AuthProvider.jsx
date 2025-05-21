import React, { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import auth from "../firebase/firebase.init.js";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(isUpdatedProfile);
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser = () => {
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    const userProfile = { displayName: name, photoURL: photo };
    setLoading(false);
    return updateProfile(auth.currentUser, userProfile);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const userInfo = {
    user,
    loading,
    setUser,
    registerUser,
    loginUser,
    logoutUser,
    updateUserProfile,
    resetPassword,
    setLoading,
    googleLogin,
  };
  return <AuthContext value={userInfo}> {children}</AuthContext>;
}

export default AuthProvider;
