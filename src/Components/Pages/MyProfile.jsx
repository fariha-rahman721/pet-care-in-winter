import React, { use } from 'react';
import Navbar from '../Navbar';
import { AuthContext } from '../../Provider/AuthProvider';


const MyProfile = () => {
    const {user} = use(AuthContext)
    return (
        <div>
           <header className='w-11/12 mx-auto'> 
            <Navbar></Navbar>
           </header>
           <main>
            <div className="flex justify-center items-center min-h-screen bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={user?.photoURL || "https://i.ibb.co/2FsfXqM/default-avatar.png"}
                        alt="User Avatar"
                        className="rounded-full w-32 h-32 object-cover border-4 border-primary"
                    />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lg font-bold">
                        {user?.displayName || "Anonymous User"}
                    </h2>
                    <p className="text-gray-600">{user?.email || "No email available"}</p>

                    <div className="card-actions mt-4">
                        <button
                           
                            className="btn btn-primary rounded-xl"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
           </main>
        </div>
    );
};

export default MyProfile;