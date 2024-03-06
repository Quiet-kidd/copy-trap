import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import Results from "./pages/results";
import Dashboard from "./pages/dashboard";
import Check from "./pages/check";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="flex flex-row justify-between border-b py-3  px-10 items-center">
          <div>
            <span className="text-xl font-bold">copyTrap</span>
          </div>
          <ul className="flex flex-row space-x-4 text-sm items-center">
            <Link to='/'>
              <li>Home</li>
            </Link>

            <Link to='/results'>
              <li>Results</li>
            </Link>

            <Link to='/check'>
              <li>Check</li>
            </Link>

            <Link to='/dashboard'>
              <li>Dashboard</li>
            </Link>

            <li className="bg-blue-500 font-bold px-4 rounded-md text-white cursor-pointer hover:bg-blue-600 py-2">Sign in</li>
            <li className="bg-gray-200 font-bold px-4 rounded-md cursor-pointer hover:bg-slate-600 hover:text-white py-2">Sign up</li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/check" element={<Check />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
