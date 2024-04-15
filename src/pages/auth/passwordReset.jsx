import { Link } from "react-router-dom";

const PasswordReset = () => {
    return (
        <div>
              <div className="container mx-auto w-96 mt-10">
            <h3 className="font-bold mb-4 text-3xl">Reset your password</h3>
            <form className="mt-5">
                <div>

                    <p className="mb-7">please enter the email address you used to create your copytrap account</p>
                </div>


                <div>
                    <p>Email</p>
                    <div>
                        <input type="email" className="mt-1 px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4 font-semibold" placeholder="Johndoe@gmail.com" />
                    </div>
                </div>
                <div>
        
                   <Link to={"/new-password"}>
                    <button className="bg-blue-500 rounded-lg w-full mb-4 py-1.5 text-white text-sm">Send reset link</button>
                   </Link>

                    <p className="text-sm text-gray-500 text-center mb-5">Return to</p>
                    
                   <Link to={"/signin"}>         
                   <button className="bg-gray-100 rounded-lg w-full mb-4 py-1.5 text-black text-sm font-bold">Sign in</button>
                   </Link> 

                </div>
            </form>
        </div>
        </div>
    );
}
 
export default PasswordReset;