import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import Results from "./pages/results";
import Dashboard from "./pages/dashboard";
import Check from "./pages/check";
import Signin from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import Verification from "./pages/auth/verification";
import PasswordReset from "./pages/auth/passwordReset";
import Newpassword from "./pages/auth/newpassword";

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

            <Link to='/signin'>
              <li className="bg-blue-500 font-bold px-4 rounded-md text-white cursor-pointer hover:bg-blue-600 py-2">Sign in</li>
            </Link>

            <Link to='/signup'>
              <li className="bg-gray-200 font-bold px-4 rounded-md cursor-pointer hover:bg-slate-600 hover:text-white py-2">Sign up</li>
            </Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/check" element={<Check />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/new-password" element={<Newpassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
