import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useAuthInfo = () => {
    const userInfo = useContext(AuthContext)

    return userInfo;
};

export default useAuthInfo;