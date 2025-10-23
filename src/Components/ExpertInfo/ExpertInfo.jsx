import React, { use } from 'react';
import Expert from './Expert';
const expertPromise = fetch('/expert.json').then(res => res.json())


const ExpertInfo = () => {
    const expertInfo = use(expertPromise)

    return (
        <div className="">
                <h1 className='text-xl font-semibold mt-5 text-center mb-5'>Meet Our Expert Vets</h1>
             <div className="w-5/11 mx-auto mt-5 grid grid-cols-1 gap-3 ">
                {
                expertInfo.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
             }
             </div>
          
            
        </div>
    );
};

export default ExpertInfo;