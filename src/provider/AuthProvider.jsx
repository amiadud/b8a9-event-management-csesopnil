import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    const userLogout = () =>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        userLogin,
        googleLogin,
        githubLogin,
        userLogout
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
             setUser(currentUser)
        })
        return () =>{
            unSubscribe();
        }

    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthContext.PropTypes = {
    children: PropTypes.node
}