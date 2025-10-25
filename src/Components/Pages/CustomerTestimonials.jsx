import React from 'react';

const CustomerTestimonials = () => {
    return (
         <section className="py-12 bg-transparent dark:bg-gray-800 rounded-xl my-8">
            <h2 className="text-deep-navy dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-5 text-center">
                What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
                {/* Testimonial 1 */}
                <div className="flex flex-col items-center text-center p-6 bg-linear-to-l from-amber-200 via-amber-100 to-amber-50 rounded-xl shadow-lg">
                    <img
                        className="w-24 h-24 rounded-full object-cover mb-4"
                        data-alt="Happy customer with their dog"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb4h_g9EmznaL-B4Np9t6cyYqlj-TbGB3100mrPMa0BQGFER4gOViPnO56UPRtgJvhwEwugPwkY0Yrrq9eYaihq3xaUkuafMAie9FaCHf7RozS6YhCsGpoMrTEqafTeK8rQYOLXLYf_8xUX3aNv3d7DfKTTYEJDi-5ipLFN6NmRzaXkp7D4E9BR2zZTE376XyAJiuOLls60gyi8DDeLJ8PbB6ARmENOk_3VeLWZIZJFzMCY2sgjQMDKgAIqoK7t2lmx6K9xaPFxA"
                        alt="Happy customer with their dog" // Added alt for accessibility
                    />
                    <p className="text-gray-600 dark:text-gray-400 italic">
                        "The best winter coat we've ever bought! Our husky stays warm and dry even in deep snow."
                    </p>
                    <div className="flex mt-2 text-sunny-yellow">
                        <p>⭐⭐⭐</p>
                    </div>
                    <p className="mt-2 font-bold text-deep-navy dark:text-white">- Sarah J.</p>
                </div>

                {/* Testimonial 2 */}
                <div className="flex flex-col items-center text-center p-6 bg-linear-to-l from-amber-200 via-amber-100 to-amber-50 rounded-xl shadow-lg">
                    <img
                        className="w-24 h-24 rounded-full object-cover mb-4"
                        data-alt="Customer's dog wearing booties"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_B-1W2MeKgMduQvWglD_68pRNBGaZU0tqvdte9h8FP_MvdoXleTizj-521ERruGJj5thYLtj0MXwCMV1fKCENTfolGx8iJhwb3l0gZdG18RTiXsvYtl55xvwUpvHtfzdZMT2KcE1ANMhaAtOVz9HdvhAF81yO61nedZ0kH3-YdmrtlFi-tszr-OGF5GK1-HHWc3_lCJgU3dZjffYyIlQp0Utf-4cgosbx9qrIHmopV8unzvRwyNfY7eefFds1v5ZlnE9MQFZ0Aw"
                        alt="Customer's dog wearing booties" 
                    />
                    <p className="text-gray-600 dark:text-gray-400 italic">
                        "These booties are a lifesaver. No more salty paws after our city walks. Highly recommend!"
                    </p>
                    <div className="flex mt-2 text-sunny-yellow">
                        <p>⭐⭐⭐⭐</p>
                    </div>
                    <p className="mt-2 font-bold text-deep-navy dark:text-white">- Mike R.</p>
                </div>

                {/* Testimonial 3 */}
                <div className="flex flex-col items-center text-center p-6 bg-linear-to-l from-amber-200 via-amber-100 to-amber-50 rounded-xl shadow-lg">
                    <img
                        className="w-24 h-24 rounded-full object-cover mb-4"
                        data-alt="Happy dog in a winter setting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9fOWqFXbhzXvSwUL_E5JPY0xz9-MaCk50jitoP0qVKT0CdIbYM9AyF4A_PahXMjhK0DKucYUV-Kq24Mhj4gDVLdgaT6iULQhO5YtVU6YeW751-nZG8IclVmlMyi4epigaOsDfaWfMUU9zynEyvlhv7TqhQ4b67BjyuvqMjW7khPpAfnPTDcvDGx4ObpZxnXycSYl0IP9S6qMv8p8MiHWAb0hfQ2o2DWL50wQUcM-iaDMLbknQjPj_3Hl32azl9MbXOA4HA2mD8Q"
                        alt="Happy dog in a winter setting" // Added alt for accessibility
                    />
                    <p className="text-gray-600 dark:text-gray-400 italic">
                        "Quality products and amazing customer service. Warm Paws is our go-to for all winter needs."
                    </p>
                    <div className="flex mt-2 text-sunny-yellow">
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                    <p className="mt-2 font-bold text-deep-navy dark:text-white">- Emily C.</p>
                </div>
            </div>
        </section>
    );
};

export default CustomerTestimonials;