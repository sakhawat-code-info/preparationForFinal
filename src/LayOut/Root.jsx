import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Root = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')

    // console.log(location);



    return (
        <div>

            {noHeaderFooter || <Navbar />}
            <div className="min-h-[calc(100vh-518px)]">
                <Outlet />
            </div>
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Root;