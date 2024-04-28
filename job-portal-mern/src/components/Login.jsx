import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";

import app from '../firebase/firebase.config';

const Login = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // handle login
    const handleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
           // const credential = GoogleAuthProvider.credentialFromResult(result);
          //  const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            console.log('login user: ', user)
          }).catch((error) => {
            // Handle Errors here.
           // const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
          });
    }
  return (
    <div className='h-screen flex justify-center items-center'>
        <button className='bg-blue-700 px-8 py-2 font-semibold text-white' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login