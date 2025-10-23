import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
    <NavLink className='hover:text-blue-900 hover:font-extrabold' to='/'><li>Home</li></NavLink>
    <NavLink className='hover:text-blue-900 hover:font-extrabold' to='/services'><li>Services</li></NavLink>
    <NavLink className='hover:text-blue-900 hover:font-extrabold' to='/myProfile'><li>MyProfile</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        
                {links}
                    </ul>
                </div>
                <div className="flex gap-2">
                <img className='w-13 h-13 rounded-full' src="/logo.jpg" alt="" />
                <a className="btn btn-ghost text-xl">Warm paws</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3 text-[15px] font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;