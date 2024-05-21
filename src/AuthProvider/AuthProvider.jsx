import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState();


    const createUsers = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUsers = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        setLoader(true);
        return signOut(auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])




















    const authInfo = {
        user,
        setUser,
        loader,
        setLoader,
        createUsers,
        loginUsers,
        logOutUser

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;