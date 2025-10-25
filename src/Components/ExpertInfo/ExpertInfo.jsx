import React, { use } from 'react';
import Expert from './Expert';
const expertPromise = fetch('/expert.json').then(res => res.json())


const ExpertInfo = () => {
    const expertInfo = use(expertPromise)

    return (
        <div className="">
                <h1 className='text-xl font-semibold mt-5 text-center mb-5'>Meet Our Expert Vets</h1>
             <div className="w-11/12 mx-auto grid grid-cols-1 lg:w-11/12 lg:mx-auto mt-5  lg:grid-cols-2 gap-3 ">
                {
                expertInfo.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
             }
             </div>
          
            
        </div>
    );
};

export default ExpertInfo;