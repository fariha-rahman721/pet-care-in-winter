
import toast, { Toaster } from "react-hot-toast";



const BookForm = () => {
    
    const handleBookForm = () => {

        toast.success('You have Booked our service successfully! 🎉');

       
    };


    return (
        <div className="w-11/12 mx-auto flex flex-col mt-10 items-center min-h-screen">
            <h1 className='text-3xl font-semibold '>Book Service</h1>
            <p className='mb-6 mt-2'>To book our service, kindly fill up this form</p>
            <div className=""></div>
            <div className=" bg-linear-to-l from-yellow-50 to-yellow-100  mx-auto shrink-0 w-11/12 ">
                <form onSubmit={handleBookForm} className="p-10 ">
                    <fieldset className="fieldset">
                        <label className="label text-xl font-semibold">Name</label>
                        <input  type="text" className="input w-full " placeholder="Your name" />
                        <label className="label text-xl font-semibold">Email</label>
                        <input  type="email" className="input w-full" placeholder="Email" />
                        <label className="label text-xl font-semibold">Password</label>
                        <input  type="password" className="input w-full" placeholder="Password" />

                        <button type='submit' className="btn btn-neutral mt-4 w-full">Book now</button>
                    </fieldset>
                </form>
                
            </div>
            
            <Toaster></Toaster>
        </div>
    );
};

export default BookForm;