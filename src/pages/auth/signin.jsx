import { Link } from "react-router-dom";

const Signin = () => {
    return ( 
        <div>
            <div className="container mx-auto w-96 mt-10">
            <h3 className="font-bold mb-4 text-3xl">Welcome back</h3>
            <p>Sign into copytrap</p>
            <form className="mt-5">
                <div>
                    <p>Email</p>
                    <div>
                        <input type="email" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="johndoe@gmail.com" />
                    </div>
                </div>

                
                    <Link to={"/password-reset"}>
                    <a href="" className="underline text-blue-500">Forgot password</a>
                    </Link>
        

                <div>
                    <p>Password</p>
                    <div>
                        <input type="password" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="Enter password" />
                    </div>
                </div>
                <div>
        
                    <Link to={"/verification"}>
                    <button className="bg-blue-500 rounded-lg w-full mb-4 py-1.5 text-white">Sign in</button>                    
                    </Link>
                </div>
            </form>
        </div>
        </div>
     );
}
 
export default Signin;