import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Signin = ({setAuthUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        const user = localStorage.getItem('user')
        const isLoggedIn = access_token && user ? true : false

        if (isLoggedIn) {
            navigate('/dashboard', { replace: true })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('https://copy-trap-api.onrender.com/auth/login', {
            username: email,
            password: password,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'application/json'
            }
        })
            .then(response => {
                // console.log('Response:', response.data);
                // store the access token to localstorage
                localStorage.setItem('access_token', response.data.access_token)
                // store the user object to localstorage
                localStorage.setItem('user', JSON.stringify(response.data.user))
                // redirect the logged in user to his dashboard

                setAuthUser(response.data.user)
                navigate('/dashboard', {replace:true})
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <div className="container mx-auto w-96 mt-10">
                <h3 className="font-bold mb-4 text-3xl">Welcome back</h3>
                <p>Sign into copytrap</p>
                <form className="mt-5" onSubmit={handleSubmit}>
                    <div>
                        <p>Email</p>
                        <div>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="johndoe@gmail.com" />
                        </div>
                    </div>


                    <Link to={"/password-reset"}>
                        <a href="" className="underline text-blue-500">Forgot password</a>
                    </Link>


                    <div>
                        <p>Password</p>
                        <div>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="Enter password" />
                        </div>
                    </div>
                    <div>

                        <button type="submit" className="bg-blue-500 rounded-lg w-full mb-4 py-1.5 text-white">Sign in</button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;