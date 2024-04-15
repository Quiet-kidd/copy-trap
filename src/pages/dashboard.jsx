const Dashboard = () => {
    return (
        <div className="container mx-auto w-2/3">
            <h3 className="font-bold text-3xl">Dashboard</h3>

            <div className="flex space-x-2 mb-4">
                <div className="w-full border border-slate-300 p-2 br-3 rounded-lg">
                    <h4 className="mt0 text-sm font-bold">Total checks</h4>
                    <p className="font-bold">25</p>
                    <p className="text-xs text-green-500 py-2 font-bold">+20%</p>
                </div>

                <div className="w-full border border-slate-300 p-2 br-3 rounded-lg">
                    <h4 className="mt0 text-sm font-bold">Average doc length</h4>
                    <p className="font-bold">1,500 words</p>
                    <p className="text-xs text-green-500 py-2 font-bold">+120%</p>
                </div>
            </div>

            <div>
                <input type="email" className="bg-gray-50 px-4 w-full border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="Search checks" />
            </div>

            <table className="table-auto w-full text-center border rounded">
                <thead className="bg-gray-50">
                    <tr className="border-b">
                        <th>Document</th>
                        <th>Check type</th>
                        <th>Submitted</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    <tr className="py-2 border-b">
                        <td className="py-2">How to bake a cake</td>
                        <td className="text-gray-500 py-2">Deep Search</td>
                        <td className="text-gray-500 py-2">2 days ago</td>
                        <td>
                            <span className="bg-gray-200 rounded-lg font-semibold py-1 px-3">Complete</span>
                        </td>
                        <td className="py-2">View report</td>
                    </tr>

                    <tr className="py-2 border-b">
                        <td className="py-2">How to bake a cake</td>
                        <td className="text-gray-500 py-2">Deep Search</td>
                        <td className="text-gray-500 py-2">2 days ago</td>
                        <td>
                            <span className="bg-gray-200 rounded-lg font-semibold py-1 px-3">Complete</span>
                        </td>
                        <td className="py-2">View report</td>
                    </tr>

                    <tr className="py-2 border-b">
                        <td className="py-2">How to bake a cake</td>
                        <td className="text-gray-500 py-2">Deep Search</td>
                        <td className="text-gray-500 py-2">2 days ago</td>
                        <td>
                            <span className="bg-gray-200 rounded-lg font-semibold py-1 px-3">Complete</span>
                        </td>
                        <td className="py-2">View report</td>
                    </tr>

                    <tr className="py-2 border-b">
                        <td className="py-2">How to bake a cake</td>
                        <td className="text-gray-500 py-2">Deep Search</td>
                        <td className="text-gray-500 py-2">2 days ago</td>
                        <td>
                            <span className="bg-gray-200 rounded-lg font-semibold py-1 px-3">Complete</span>
                        </td>
                        <td className="py-2">View report</td>
                    </tr>

                    <tr className="py-2 border-b">
                        <td className="py-2">How to bake a cake</td>
                        <td className="text-gray-500 py-2">Deep Search</td>
                        <td className="text-gray-500 py-2">2 days ago</td>
                        <td>
                            <span className="bg-gray-200 rounded-lg font-semibold py-1 px-3">Complete</span>
                        </td>
                        <td className="py-2">View report</td>
                    </tr>

                </tbody>
            </table>

            
            <h3 className="font-bold text-2xl mt-5 mb-4">New check</h3>
            <div>
                <input type="email" className="px-4 w-1/2 border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4" placeholder="Enter your text here" />
            </div>

            <button className="bg-blue-500 rounded-lg w-1/2 border-0 my-3 text-white py-2 text-sm">Start Check</button>

            <h3 className="font-bold text-2xl mt-5">Quick checks</h3>

            <ul className="flex w-6/12 justify-between text-xs pt-5">
                <li>
                    <button className="text-black bg-gray-200 rounded-lg font-semibold py-1 px-3">Write or paste</button>
                </li>
                <li>
                    <button className="text-black bg-gray-200 rounded-lg font-semibold py-1 px-3">Upload a file</button>
                </li>
                <li>
                    <button className="text-black bg-gray-200 rounded-lg font-semibold py-1 px-3">Check URL</button>
                </li>
                <li>
                    <button className="text-black bg-gray-200 rounded-lg font-semibold py-1 px-3">Check multiple docs</button>
                </li>
            </ul>
        </div>
    );
}

export default Dashboard;
