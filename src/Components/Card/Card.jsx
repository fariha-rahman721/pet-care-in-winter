import React, { use } from 'react';
import SingleCard from './SingleCard';

const servicePromise = fetch('/careService.json').then(res =>res.json())

const Card = () => {
    const services = use(servicePromise)
    return (
        <div className='mt-15'>
            <h1 className='text-3xl text-blue-950 font-bold text-center'>Popular Winter Care Services</h1>
            <div className="w-11/12 mx-auto grid grid-cols-1 lg:w-11/12 lg:mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-5 space-x-1 mt-10 ">
                {
                    services.map(service => <SingleCard key={service.id} service={service}></SingleCard>)
                }
            </div>

        </div>
    );
};

export default Card;