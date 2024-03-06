const Results = () => {
    return (
        <div className="container mx-auto w-2/3">
            <button className="bg-gray-200 rounded-lg mb-5 float-right py-0.5 px-3 font-semibold">download report</button>
            <h3 className="font-bold text-2xl mt-5 mb-4">Plagiarism detected</h3>
            <p className="text-sm text-gray-500">10% plagiarism</p>
            <h2 className="mt-7 mb-4 font-bold text-xl">Original text(100 words)</h2>
            
            <div className="container">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quidem quam culpa laborum obcaecati quas maiores eligendi sed, facilis numquam distinctio beatae perspiciatis tempora at aut, praesentium fugit nobis. Expedita.</p>
            </div>

            <div>
                <h3 className="font-bold mt-5 mb-5">Sources(5)</h3>

                <div>
                    <div className="flex space-x-4 items-center">
                        <div className="h-8 w-8 bg-slate-300 rounded"></div>
                        <div className="text-sm">
                            <span className="font-semibold">ipsum.com</span>
                            <p className="text-gray-400 text-sm">https:/www.ipsum.com/feed/html</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <div className="h-8 w-8 bg-slate-300 rounded"></div>
                        <div className="text-sm">
                            <span className="font-semibold">ipsum.com</span>
                            <p className="text-gray-400 text-sm">https:/www.ipsum.com/feed/html</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <div className="h-8 w-8 bg-slate-300 rounded"></div>
                        <div className="text-sm">
                            <span className="font-semibold">ipsum.com</span>
                            <p className="text-gray-400 text-sm">https:/www.ipsum.com/feed/html</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <div className="h-8 w-8 bg-slate-300 rounded"></div>
                        <div className="text-sm">
                            <span className="font-semibold">ipsum.com</span>
                            <p className="text-gray-400 text-sm">https:/www.ipsum.com/feed/html</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <div className="h-8 w-8 bg-slate-300 rounded"></div>
                        <div className="text-sm">
                            <span className="font-semibold">ipsum.com</span>
                            <p className="text-gray-400 text-sm">https:/www.ipsum.com/feed/html</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <div className="h-8 w-8 bg-slate-300 rounded"></div>
                        <div className="text-sm">
                            <span className="font-semibold">ipsum.com</span>
                            <p className="text-gray-400 text-sm">https:/www.ipsum.com/feed/html</p>
                        </div>
                    </div>
                </div>

                <ul className="flex justify-between text-gray-500 pt-16">
                    <li>Home</li>
                    <li>API</li>
                    <li>Integrations</li>
                    <li>Pricing</li>
                    <li>Help Center</li>
                </ul>
                <p className="text-gray-500 mt-4 text-center">2022 plagiarism check</p>
            </div>
        </div>
    );
}

export default Results;