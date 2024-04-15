import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="container mx-auto w-96 mt-10">
            <h3 className="font-bold mb-4">Create an account</h3>
            <form className="">
                <div>
                    <p>Email</p>
                    <div>
                        <input type="email" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="johndoe@gmail.com" />
                    </div>
                </div>

                <div>
                    <p>Password</p>
                    <div>
                        <input type="password" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="Enter password" />
                    </div>
                </div>
                <div>
                    <p>Confirm Password</p>
                    <div>
                        <input type="password" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="confirm password" />
                    </div>
                </div>
                <div className="flex space-x-2 items-center mb-5">
                    <input className="" type="checkbox" name="" id="" />
                    <span>I agree to terms of service</span>
                    </div>

                <div>
                    <Link to={"/verification"}>
                    <button className="bg-blue-500 rounded-lg w-full mb-4 py-1.5 text-white">Sign up</button>
                    </Link>
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