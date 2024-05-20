import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Login = () => {
    const { emailPaswordLogin, setUser } = useContext(AuthContext)

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    })

    const handleLoginForm = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        emailPaswordLogin(email, password)
            .then

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
            <div className="flex h-screen items-center justify-center p-10">
                <div className="xl:w-1/2  rounded-2xl border border-blue-800 md:shadow-xl">
                    <div className="grid md:grid-cols-2 p-5">
                        <div className="">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-10299071-8333958.png?f=webp" alt="" />
                        </div>
                        <div className="flex items-center justify-center">
                            <form onSubmit={handleLoginForm}>
                                <h1 className="text-center font-extrabold uppercase text-rose-500">User login</h1>
                                <br />
                                <input type="email" name="email" className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3" placeholder="email" required />
                                <input type="password" name="password" className="mb-3 w-full rounded-2xl bg-zinc-100 outline-rose-400 px-5 py-3" placeholder="password" required />

                                <div>
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

        </div>
    );
};

export default Login;