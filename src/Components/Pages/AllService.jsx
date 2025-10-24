import React, { use } from 'react';
import SingleCard from '../Card/SingleCard';
const allServicePromise = fetch('/careService.json').then(res => res.json())
const AllService = () => {
    const allService = use(allServicePromise);
    
    return (
        <div className='mt-15'>
            <h1 className='text-3xl text-blue-950 font-bold text-center'>Popular Winter Care Services</h1>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 space-x-1 mt-10 ">
                {
                    allService.map(service => <SingleCard key={service.id} service={service}></SingleCard>)
                }
            </div>

        </div>
        
    );
};

export default AllService;