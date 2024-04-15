import { Link } from "react-router-dom";

const Newpassword = () => {
    return (
        <div>
             <div className="container mx-auto w-96 mt-10">
            <h3 className="font-bold mb-4 text-3xl">Create a new password</h3>
            <form className="mt-5">
                <div>
                    <p>New password</p>
                    <div>
                        <input type="password" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="Enter new password" />
                    </div>
                </div>

                
                    <div className="text-xs text-gray-500">Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character</div>
        

                <div>
                    <p>Confirm new password</p>
                    <div>
                        <input type="password" className="px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="Confirm new password" />
                    </div>
                </div>
                <div>

                    <Link to={"/verification"}>
                    <button className="bg-blue-500 rounded-lg w-full mb-4 py-1.5 text-white">Reset password</button>
                    </Link>

                    <div className="bg-neutral-400 rounded h-2"></div>
                    <div className="text-xs text-gray-500">your password is too weak</div>

                </div>
            </form>
        </div>
        </div>
    );
}
 
export default Newpassword;