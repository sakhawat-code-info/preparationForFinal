import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const LoginRegister = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { createUsers, loginUsers, setUser } = useContext(AuthContext);

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    })

    const handleCreatUserForm = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        createUsers(email, password)
            .then((userCredential) => {
                // Signed up 
                alert("Login Successful", userCredential);
            })
            .catch((error) => {
                toast.error("Wrong Input. Try again !!!");
                console.log("Error Code is = ", error.code, "error sms is = ", error.message);
            });

    }
    const handleLoginForm = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        loginUsers(email, password)
            .then((userCredential) => {
                // Signed up 
                alert("Login Successful");
                setUser(userCredential.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                toast.error("Wrong Input. Try again !!!");
                console.log("Error Code is = ", error.code, "error sms is = ", error.message);
            });

    }


    const handleCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value, false) == true) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div>
            <div className='flex'>

                <div className="flex h-screen items-center justify-center p-10">
                    <div className="  rounded-2xl border border-blue-800 md:shadow-xl">
                        <div className=" p-5">

                            <div className="flex items-center justify-center">
                                <form onSubmit={handleCreatUserForm}>
                                    <h1 className="text-center font-extrabold uppercase text-rose-500">create user</h1>
                                    <br />
                                    <input type="email" name="email" className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3" placeholder="email" required />
                                    <input type="password" name="password" className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3" placeholder="password" required />

                                    <div className='flex items-center justify-center'>
                                        <LoadCanvasTemplate />
                                    </div>
                                    <input type="text" ref={captchaRef} name="captcha" className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3" placeholder="captcha" />

                                    <div className='flex items-center justify-center py-2'>
                                        <button onClick={handleCaptcha} className='btn btn-outline border-0 border-x-2 '>Validate</button>
                                    </div>


                                    <input type="submit" disabled={disabled} className="btn mb-3 w-full rounded-2xl bg-rose-500 px-5 py-3 font-semibold text-white" value="Login" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex h-screen items-center justify-center p-10">
                    <div className="  rounded-2xl border border-blue-800 md:shadow-xl">
                        <div className="grid md:grid-cols-2 p-5">
                            <div className="">
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-10299071-8333958.png?f=webp" alt="" />
                            </div>
                            <div className="flex items-center justify-center">
                                <form onSubmit={handleLoginForm}>
                                    <h1 className="text-center font-extrabold uppercase text-rose-500">login user</h1>
                                    <br />
                                    <input type="email" name="email" className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3" placeholder="email" required />
                                    <input type="password" name="password" className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3" placeholder="password" required />




                                    <input type="submit" className="btn mb-3 w-full rounded-2xl bg-rose-500 px-5 py-3 font-semibold text-white" value="Login" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to={'/'} className='flex justify-end'>
                    <button className='btn btn-outline px-10 border-0 border-b-2'>Go Home</button>
                </Link>
            </div>

        </div>
    );
};

export default LoginRegister;