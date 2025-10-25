
import React from 'react';
import 'animate.css';

const Tips = ({ tips }) => {

    
    return (
        <div
            className="card w-80 lg:w-96 card-md shadow-sm bg-linear-to-r from-orange-50 via-orange-100 to-orange-200"
            data-aos="fade-up"
            data-aos-delay={tips.id * 100}
        >
            <div className="card-body flex flex-col animate__animated animate__animate__bounce">
                <div className="flex gap-3 items-center">
                    <img className='w-10 h-10 rounded-full' src="/logo.jpg" alt="" />
                    <span className='text-xl text-purple-700 font-bold'>
                        Tips-{tips.id}
                    </span>
                </div>
                <h2 className="card-title">{tips.title}</h2>
                <p>{tips.tips}</p>
            </div>
        </div>
    );
};

export default Tips;
