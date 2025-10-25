
import toast from "react-hot-toast";



const BookForm = () => {
    
    const handleBookForm = () => {

        toast.success('Booking successful! 🎉');

       
    };


    return (
        <div className="w-11/12 mx-auto flex flex-col mt-5 items-center min-h-screen">
            <h1 className='text-2xl font-semibold '>Book Service</h1>
            <p className='mb-4'>To book our service, kindly fill up this form</p>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <form onSubmit={handleBookForm} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input  type="text" className="input" placeholder="Your name" />
                        <label className="label">Email</label>
                        <input  type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input  type="password" className="input" placeholder="Password" />

                        <button type='submit' className="btn btn-neutral mt-4">Book now</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default BookForm;