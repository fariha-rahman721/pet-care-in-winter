import React, { use } from 'react';
import Tips from './Tips';
const careTipsPromise = fetch('/careTips.json').then(res => res.json())

const CareTips = () => {
    const careTips = use(careTipsPromise)
    return (
        <div>
            
            <h1 className='text-2xl font-semibold mt-8 mb-5 text-center'>Winter Care Tips for Pets</h1>
            <div className="w-11/12 mx-auto mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 rounded">
               {
                careTips.map(tips => <Tips key={tips.id} tips={tips}></Tips>)
               }
            </div>
            
        </div>
    );
};

export default CareTips;