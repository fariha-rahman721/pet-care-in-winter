import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import userIcon from '/userIcon.jpg'


const Navbar = () => {
    const {user, logOut} = use(AuthContext);
    const handleLogout = () =>{
    logOut().then(() =>{
        toast.success('successfully logged out')
    }  ).catch((error) =>{
        const errorMessage = error.message;
        toast.error(errorMessage)
    })
    }
    const links = <>
    <NavLink className={({ isActive }) => 
          isActive ? "text-blue-900 font-extrabold" : "hover:text-blue-900 hover:font-extrabold"
        } to='/'>Home</NavLink>
    <NavLink className={({ isActive }) => 
          isActive ? "text-blue-900 font-extrabold" : "hover:text-blue-900 hover:font-extrabold"
        } to='/services'>Services</NavLink>
    <NavLink className={({ isActive }) => 
          isActive ? "text-blue-900 font-extrabold" : "hover:text-blue-900 hover:font-extrabold"
        } to='/myProfile'>MyProfile</NavLink>
    </>
    return (
        <div className="w-11/12 mx-auto  lg:w-11/12 lg:mx-auto navbar bg-transparent">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow cursor-pointer">
                        
                {links}
                    </ul>
                </div>
                <div className="flex gap-2">
                <img className='w-8 h-8 lg:w-13 lg:h-13 rounded-full' src="/logo.jpg" alt="" />
                <h1 className="text-sm text-center font-semibold mt-1 lg:text-xl">Warm paws</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3 text-[15px] font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <img className='w-7 h-7 mr-1 lg:w-10 lg:h-10 lg:mr-3 rounded-full' src={`${user? user.photoURL : userIcon}`} alt="" />
                {
                    user? <button onClick={handleLogout} className='btn bg-amber-600 text-white hover:bg-amber-400 cursor-pointer'>LogOut</button> : <NavLink to='/auth/login' className='btn bg-amber-600 hover:bg-amber-400 text-white cursor-pointer'>Login</NavLink>
                }
                
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Navbar;