import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function NavBar({authUser}) {
    const[ isAuth, setIsAuth] = useState()
    const navigate = useNavigate()
  
    useEffect(()=>{
      const access_token = localStorage.getItem('access_token')
      const user = localStorage.getItem('user')
      const isLoggedIn = access_token && user ? true : false
  
      setIsAuth(isLoggedIn)
        navigate('/signin', {replace: true})
    },[authUser])
    
    const handleSignOut =  () => {
      localStorage.clear()
      setIsAuth(false)
      navigate('/', {replace: true})
    }
  
  return (
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

      {!isAuth ? (<Link to='/signin'>
        <li className="bg-blue-500 font-bold px-4 rounded-md text-white cursor-pointer hover:bg-blue-600 py-2">Sign in</li>
      </Link>):

      (<Link to='/dashboard'>
        <li className="bg-blue-500 font-bold px-4 rounded-md text-white cursor-pointer hover:bg-blue-600 py-2">Dashboard</li>
      </Link>
      )}

      {!isAuth ? (<Link to='/signup'>
        <li className="bg-gray-200 font-bold px-4 rounded-md cursor-pointer hover:bg-slate-600 hover:text-white py-2">Sign up</li>
      </Link>) : <button onClick={handleSignOut} className="bg-gray-200 font-bold px-4 rounded-md cursor-pointer hover:bg-slate-600 hover:text-white py-2">Sign out</button>
      }

    </ul>
  </nav>
  )
}

export default NavBar