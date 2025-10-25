import React, { useEffect, useState } from 'react';

const Hero = () => {
    const images = [
        '/bg1.jpg',
        '/bg2.jpg',
        '/bg3.jpg',
        '/bg4.jpg',

    ];

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className='hero relative w-11/12 mx-auto bg-cover bg-center bg-no-repeat 
  min-h-[80vh] sm:min-h-[90vh] md:min-h-screen 
  lg:w-11/12 lg:mx-auto transition-all duration-1000 ease-in-out'
            style={{
                backgroundImage: `url(${images[current]})`, opacity: 0.7
            }}
        >
            <div className='absolute inset-0'>
                <div className='relative flex justify-items-end items-end p-5'>
                    <h1 className='text-6xl text-white font-extrabold text-end'>Welcome to my <br /><span className='text-amber-700 text-center'>warm paws</span></h1>

                </div>
            </div>
        </section>
    );
};

export default Hero;