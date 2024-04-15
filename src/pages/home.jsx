import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mx-auto w-2/3">
            <div className="relative">
                <img className="w-full pt-10" src="/asset3.png" alt="" />
                <div className="absolute bottom-10 left-10 w-1/2">
                    <h2 className="text-white text-4xl font-bold py-2">copyTrap</h2>
                    <p className="text-white text-sm mt-3 mb-5">check your text for plagiarism in seconds</p>
                    <div className="bg-white w-full p1 flex rounded-xl h-12 items-center place-content-between"><input type="text" className="w5 border-0 pl-3" placeholder="Enter your text here" />
                   
                   
                    <button className="bg-blue-500 py-1 border-0 rounded text-white px-2 mr-2">check</button></div>
                </div>
            </div>

            <h3 className="mt-4 font-bold text-lg">How it works</h3>
            <div className="flex space-x-4 my-5">

            <div className="border border-slate-300 p-2 br-3 rounded-lg">
                <h4 className="mt0 text-sm font-bold">Type or paste your text</h4>
                <p className="text-xs text-gray-400 py-2">You can type or paste your text. You can also upload a file with your text.</p>
            </div>

            <div className="border border-slate-300 p-2 br-3 rounded-lg">
                <h4 className="mt0 text-sm font-bold">Upload a file</h4>
                <p className="text-xs text-gray-500 py-2">You can upload a file with your text.We accept .doc, .docx, .pdf, .txt files.</p>
            </div>

            <div className="border border-slate-300 p-2 br-3 rounded-lg">
                <h4 className="mt0 text-sm font-bold">Pay for the check</h4>
                <p className="text-xs text-gray-500 py-2">You can pay for the check using your credit card. We use Stripe to process payments</p>
            </div>

            <div className="border border-slate-300 p-2 br-3 rounded-lg">
                <h4 className="mt0 text-sm font-bold">Get results</h4>
                <p className="text-xs text-gray-500 py-2">You will receive the results of the check by email in 15-30 minutes after you paid for your check</p>
            </div>
        </div>
        
        <Link to={"/check"}>
        <div><button className="bg-blue-500 rounded-lg w-2/3 mb-5 py-1 text-white">Start checking</button></div>
        </Link>
    </div>
    );
}

export default Home;