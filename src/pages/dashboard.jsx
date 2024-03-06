const Dashboard = () => {
    return (

        <div className="container mt-5 mx-auto pt-5 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Check for plagiarism</h2>
            <p className="mb-4">Find out if your paper is original. Upload a document to get started</p>
            <div className="flex justify-between">
                <div>
                     <img src="asset1.png" alt="" />
                    <p className="mt-4">Upload a file</p>
                </div>
                <div>
                    <img src="asset2.png" alt="" />
                    <p className="mt-4">Or drag and drop</p>
                </div>
            </div>
            <p className="text-xs  py-1 mt-4">Supported file types: .doc, .docx, .pdf, .txt</p>
            <div className="bg-neutral-400 rounded h-2"></div>
            <button className="bg-blue-500 rounded w-2/3 border-0 my-3 text-white">Start Plagiarism Check</button>
        </div>
    );
}

export default Dashboard;
