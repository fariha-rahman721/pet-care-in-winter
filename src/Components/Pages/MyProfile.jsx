import React, { useContext, useState } from 'react';
import Navbar from '../Navbar';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';
import Footer from '../Footer/Footer';

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  // handle update
  const handleUpdate = (e) => {
    e.preventDefault();

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success('Profile updated successfully ✅');
        setShowForm(false);
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <header className='w-11/12 mx-auto'>
        <Navbar />
      </header>

      <main>
        <div className="flex justify-center items-center min-h-screen ">
          <div className="card w-96 bg-linear-to-r from-orange-100 via-orange-200 to-orange-300 rounded-2xl shadow-lg">
            <figure className="px-10 pt-10">
              <img
                src={user?.photoURL || "https://i.ibb.co/2FsfXqM/default-avatar.png"}
                alt="User Avatar"
                className="rounded-full w-32 h-32 object-cover border-4 border-primary"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg font-bold">
                Name: {user?.displayName || "Anonymous User"}
              </h2>
              <p className="text-gray-600 font-semibold">
                Email: {user?.email || "No email available"}
              </p>

              <div className="card-actions mt-4">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="btn btn-primary rounded-xl"
                >
                  {showForm ? "Cancel" : "Update Your Profile"}
                </button>
              </div>

              
              {showForm && (
                <form onSubmit={handleUpdate} className="mt-4 w-full">
                  <input
                    type="text"
                    placeholder="Enter new name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered w-full mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter new image URL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="input input-bordered w-full mb-2"
                  />
                  <button type="submit" className="btn btn-neutral w-full">
                    Save Changes
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MyProfile;
