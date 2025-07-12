import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";


const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn=()=>{
   return signInWithPopup(auth,provider)
  }

  const updateUser=(name,photo)=>{
    updateProfile(auth.currentUser,{
      displayName:name,photoURL:photo
    })
  }

  const logOut=()=>{
    return signOut(auth)
  }

 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
        console.log(currentUser)

    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    signIn,
    user,
    googleLogIn,
    logOut,
    updateUser

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
