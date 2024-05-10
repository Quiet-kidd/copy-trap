import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Trash2, Loader } from "lucide-react";

const Dashboard = ({authUser}) => {
    const navigate = useNavigate();
    const [file, setFile] = useState();
    const [documents, setDocuments] = useState([]);
    const [scans, setScans] = useState([]);
    const [loading, setLoading] = useState(false);

    const accessToken = localStorage.getItem('access_token');

    const getScans = async (id) => {
        const response = await axios.get(`https://copy-trap-api.onrender.com/scans/user/${id}`)
        setScans(response.data);
    }

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        const user = localStorage.getItem('user')
        const isLoggedIn = access_token && user ? true : false

        if (!isLoggedIn) {
            navigate('/signin', { replace: true })
        }

        getDocuments(JSON.parse(user).id);
        getScans(JSON.parse(user).id);
    }, [loading])

    async function getDocuments(id) {
        if (!accessToken) {
            throw new Error('Access token not found');
        }

        
        try {
            const response = await axios.get(
                `https://copy-trap-api.onrender.com/documents/user/${id}`,
                {
                    headers: {
                        'accept': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );
            
            setDocuments(response.data);
        } catch (error) {
            if (error.response.status == 401 || error.response.status == 403) {
                localStorage.clear()
                navigate('/signin', { replace: true })
            }
        }
    }

    const handleSubmit = async () => {
        if (file) {
            try {
                setLoading(true)
                const formData = new FormData();
                formData.append('file', file);

                if (!accessToken) {
                    throw new Error('Access token not found');
                }

                const response = await axios.post(
                    'https://copy-trap-api.onrender.com/documents/',
                    formData,
                    {
                        headers: {
                            'accept': 'application/json',
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }
                );
                setLoading(false);
            } catch (error) {
                console.error('Error uploading file:', error);
                setLoading(false);
            }
        } else {
            console.error('No file selected');
        }
    };

    const handleDeleteDocument = async (id) => {
        try {
            setLoading(true)
            await axios.delete(
                `https://copy-trap-api.onrender.com/documents/${id}`,
                {
                    headers: {
                        'accept': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );
            setLoading(false);
        } catch (error) {
            if (error.response.status == 401 || error.response.status == 403) {
                localStorage.clear()
                navigate('/signin', { replace: true })
            }
        }
    }

    if (loading) {
        return <Loader />
    }
    return (
        <div className="container mx-auto w-2/3">
            <h3 className="font-bold text-3xl">Dashboard</h3>

            <div className="flex space-x-2 mb-4">
                <div className="w-full border border-slate-300 p-2 br-3 rounded-lg">
                    <h4 className="mt0 text-sm font-bold">Total checks</h4>
                    <p className="font-bold">{scans.length}</p>
                    <p className="text-xs text-green-500 py-2 font-bold">+20%</p>
                </div>

                <div className="w-full border border-slate-300 p-2 br-3 rounded-lg">
                    <h4 className="mt0 text-sm font-bold">Total documents</h4>
                    <p className="font-bold">{documents.length}</p>
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
                        <th>Similarity %</th>
                        <th>Submitted</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {documents.map((doc) => (
                        <tr className="py-2 border-b" key={doc.id}>
                            <td className="py-2">{doc.title}</td>
                            <td className="text-gray-500 py-2">Deep Search</td>
                            <td className="text-gray-500 py-2">0%</td>
                            <td className="text-gray-500 py-2">2 days ago</td>
                            <td>
                                <span className="bg-gray-200 rounded-lg font-semibold py-1 px-3">Complete</span>
                            </td>
                            <td className="py-2 flex gap-3 justify-center">
                                <span className="cursor-pointer hover:underline hover:text-blue-400">View report</span>
                                <button onClick={() => handleDeleteDocument(doc.id)}><Trash2 className="h-4 cursor-pointer" /></button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>


            <h3 className="font-bold text-2xl mt-5 mb-4">New check</h3>
            <div>
                <input
                    type="file"
                    className="px-4 w-1/2 border-black ring-1 ring-inset border-0 rounded-xl py-2 mb-4"
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </div>

            <button onClick={handleSubmit} className="bg-blue-500 rounded-lg w-1/2 border-0 my-3 text-white py-2 text-sm">Start Check</button>

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
