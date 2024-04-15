const Verification = () => {
    return ( 
        <div>
                <div className="container mx-auto w-96 mt-10">
            <h3 className="font-bold mb-4 text-3xl text-center">Almost there!</h3>
            <form className="mt-5">
                <div>
                    <p className="mb-4 text-center font-semibold">We've sent you an email johndoe@gmail.com Please follow the instructions in the email</p>
                </div>


                <div>
                    <button className="bg-blue-500 rounded-lg w-full mb-4 py-1.5 text-white text-sm">Resend Verification Email</button>
                </div>
            </form>
        </div>
        </div>
     );
}
 
export default Verification;