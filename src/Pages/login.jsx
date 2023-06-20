import { useState } from 'react';
import '../App.css';

import { Link, useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {

    const auth = getAuth();

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }

    return (
        <div>
            <section className="bsign" style={{ backgroundImage: `url(${bk})` }}>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center align-items-center full">
                        <div className="focus-in-expand">
                            <h1>Welcome back!</h1>
                            <form className="d-flex flex-column justify-content-center">
                                <div className="form__group field">
                                    <input required placeholder="Email" className="form__field" type="Email" name="Email" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    <label className="form__label" htmlfor="Email">Email</label>
                                </div>
                                <div className="form__group field">
                                    <input required placeholder="Password" className="form__field" type="Password" name="Password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    <label className="form__label" htmlfor="Password">Password</label>
                                    <span className="d-flex justify-content-end py-3"><Link to="/forgotpassword" className="text-white">Forgot Password?
                                    </Link>
                                    </span></div>
                                <button className={CSS.btn} onClick={onSubmit}>
                                    Sign in
                                </button>
                                <span className="text-lg text-center text-white py-2">
                                    <span className="opacity-70">Don't have an account? </span>
                                    <Link to="/signup" className="text-white font-bold opacity-100 bg-transparent">Sign Up</Link>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
                <Link to="/"><div className="bheader" style={{ backgroundImage: `url(${header})` }}>
                </div></Link>
            </section>
        </div>
    );
}