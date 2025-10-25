import React from 'react';

const NewsLetterSubscribe = () => {
    return (
       
        <section className="py-12 my-8 bg-sky-blue/30 dark:bg-deep-navy/30 rounded-xl">
            <div className="text-center px-4">
                <h2 className="text-2xl font-bold text-deep-navy dark:text-white mb-2">
                    Get 10% Off Your First Order
                </h2>
                <p className="text-deep-navy/80 dark:text-gray-300 mb-6">
                    Join our newsletter for exclusive deals, new product announcements, and more.
                </p>
                <form className="flex justify-center">
                    <input
                        className="w-full max-w-sm p-3 rounded-l-lg border-2 focus:ring-primary"
                        placeholder="Enter your email"
                        type="email"
                    />
                    <button
                        className="bg-primary text-white font-bold p-3 rounded-r-lg hover:bg-opacity-90"
                        type="submit"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>

    );
};

export default NewsLetterSubscribe;