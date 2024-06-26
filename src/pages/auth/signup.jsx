import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(name, email, password, phoneNumber);

        axios.post('https://copy-trap-api.onrender.com/auth/register', {
            name: name,
            phone_number: phoneNumber,
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        })
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="container mx-auto w-96 mt-10">
            <h3 className="font-bold mb-4">Create an account</h3>
            <form className="" onSubmit={handleSubmit}>
                <div>
                    <p>Name</p>
                    <div>
                        <input onChange={(e) => setName(e.target.value)} type="name" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="enter name" />
                    </div>
                </div>

                <div>
                    <p>Email</p>
                    <div>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="johndoe@gmail.com" />
                    </div>
                </div>

                <div>
                    <p>Password</p>
                    <div>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="Enter password" />
                    </div>
                </div>

                <div>
                    <p>Phone number</p>
                    <div>
                        <input onChange={(e) => setPhoneNumber(e.target.value)} type="phone number" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="Enter phone number" />
                    </div>
                </div>
                <div className="flex space-x-2 items-center mb-5">
                    <input className="" type="checkbox" name="" id="" />
                    <span>I agree to terms of service</span>
                </div>

                <div>
                    <button type="submit" className="bg-blue-500 rounded-lg w-full mb-4 py-1.5 text-white">Sign up</button>
                </div>
            </form>
            <div className="flex justify-center">

                <Link to={"/signin"}>
                    <a href="" className="underline text-blue-500">Already have an account?</a>
                </Link>
            </div>
        </div>
    );
}

export default SignUp;