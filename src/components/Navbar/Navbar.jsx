import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Navbar.css'
import useAuth from '../../hooks/useAuth';



const Navbar = () => {

  const {user, userLogout} = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    userLogout()
    .then(res => {
      console.log('Logout completed',res);
      navigate('/login');
    })
  }

    const navlinks = <>
                    <li><NavLink className="mx-2 my-2 text-lg px-4 py-1 border rounded-md " to="/">Home</NavLink></li>
                    <li><NavLink className="mx-2 my-2 text-lg px-4 py-1 border rounded-md" to="/services">Services</NavLink></li>
                    <li><NavLink className="mx-2 my-2 text-lg px-4 py-1 border rounded-md" to="/profile">Profile</NavLink></li>
    </>

    return (
        <>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navlinks}
      </ul>
    </div>
    <img className='w-28 avatar normal-case' src={Logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user ? <><div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={user?.photoURL} />
      </div>
    </label>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <Link to='/profile' className="justify-between">Profile
          <span className="badge">New</span>
        </Link>
      </li>
    </ul>
  </div></>
  :<></>
  }
    {
      user ? <NavLink onClick={handleLogout} to="/login" className=" ml-4 btn btn-sm">Logout</NavLink> : <NavLink to="/login" className="btn btn-sm">Login</NavLink>
    }
  </div>
</div>
        </>
    );
};

export default Navbar;