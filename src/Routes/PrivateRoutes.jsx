import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const location = useLocation()

    const { user, loader } = useContext(AuthContext);


    if (loader) {
        return <>
            <div className="flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>;
            </div>
        </>
    }


    if (user) {
        return children;
    }


    return <Navigate to={"/login"} state={location.pathname ? location.pathname : '/'} ></Navigate>
};

export default PrivateRoutes;