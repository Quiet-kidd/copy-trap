import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Results from "./pages/results";
import Dashboard from "./pages/dashboard";
import Check from "./pages/check";
import Signin from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import Verification from "./pages/auth/verification";
import PasswordReset from "./pages/auth/passwordReset";
import Newpassword from "./pages/auth/newpassword";
import { useEffect, useState } from "react";
import NavBar from "./components/nav-bar";

const App = () => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() =>{
    const localUser = localStorage.getItem("user")
    if (localUser) {
      setAuthUser(JSON.parse(localUser))
    }
  },[])
  return (
    <>
      <BrowserRouter>
          <NavBar authUser={authUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/check" element={<Check />} />
          <Route path="/dashboard" element={<Dashboard authUser={authUser}/>} />
          <Route path="/signin" element={<Signin setAuthUser={setAuthUser}/>} />
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
