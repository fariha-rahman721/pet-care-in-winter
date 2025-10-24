import React from 'react';
import { Link } from 'react-router';

const SingleCard = ({ service }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img className='w-92 h-68 py-2 rounded-xl'
                    src={service.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{service.serviceName}</h2>
                <div className="flex justify-between gap-5 p-3">
                    <p className='w-5 bg-pink-100 rounded text-center p-2 text-[15px] font-semibold'>⭐⭐⭐{service.rating}</p>
                    <p className='w-5 bg-amber-100 rounded text-center p-2 text-[15px] font-semibold'>Price: ${service.price}</p>
                </div>
                <div className="card-actions justify-center">
                <Link to={`/services/${service.id}`} className="btn btn-primary">View details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;