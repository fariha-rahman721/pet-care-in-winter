import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const{createUser, setUser} = use(AuthContext)
    const handleRegister = (e) =>{
        e.preventDefault();
        console.log(e.target)
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email, password})
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            setUser(user)
        })
        .catch((error) =>{
            const errorMessage = error.message;
            toast(errorMessage)
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className='text-2xl font-semibold text-center'>Sign Up Your Account</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                         
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Your name" required/>
                        {/* photo url */}
                        <label className="label">Photo URL</label>
                        <input name='photo' type="" className="input" placeholder="Photo URL" required/>

                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required/>

                        {/* pasword */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required/>
                        
                        
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center text-[14px] mt-3'>Already have an account? <Link className='text-blue-700 font-semibold' to='/auth/login'>Login</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;