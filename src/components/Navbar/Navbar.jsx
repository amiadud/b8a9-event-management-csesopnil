import React from 'react';
import logo from '../../assets/img/Logo.png'
import { NavLink } from 'react-router-dom';

import './Navbar.css'



const Navbar = () => {

    const navlinks = <>
                    <NavLink className="mx-2 text-lg px-4 py-1 border rounded-md " to="/">Home</NavLink>
                    <NavLink className="mx-2 text-lg px-4 py-1 border rounded-md" to="/services">Service</NavLink>
                    <NavLink className="mx-2 text-lg px-4 py-1 border rounded-md" to="/login">Login</NavLink>
                    <NavLink className="mx-2 text-lg px-4 py-1 border rounded-md" to="/register">Register</NavLink>
    </>

    return (
        <>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <img className='w-28 avatar normal-case' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-sm">Login</a>
  </div>
</div>
        </>
    );
};

export default Navbar;