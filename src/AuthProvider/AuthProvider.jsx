import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";


export const AuthContext = createContext(null);
const auth = getAuth();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState();


    const emailPaswordLogin = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }













    const authInfo = {
        user,
        setUser,
        loader,
        setLoader,
        emailPaswordLogin

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;