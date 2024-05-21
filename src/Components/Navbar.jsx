import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {

    const { logOutUser, user } = useContext(AuthContext);

    const handleLogoutUser = () => {
        logOutUser()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error)
            });
    }



    return (
        <div className="navbar fixed z-50  bg-[#15151580] text-white max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">12</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase">
                    <li><Link to={'/'}>Home</Link></li>
                    {/* <li><Link >CONTACT us</Link></li>
                    <li><Link>DASHBOARD</Link></li> */}
                    <li><Link to={'/menu'}>Our Menu</Link></li>
                    <li><Link to={'/orderFood/salad'}>Order Food</Link></li>
                    <li>
                        <button className=" relative border-2 border-transparent  rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            <span className="absolute inset-0 object-right-top -mr-6">
                                <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                                    6
                                </div>
                            </span>
                        </button>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <Link onClick={handleLogoutUser} className="btn btn-outline px-10 border-0 border-b-2 btn-secondary">Logout</Link> : <Link to={'/login'} className="btn btn-outline px-10 border-0 border-b-2 btn-accent">Login</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;
