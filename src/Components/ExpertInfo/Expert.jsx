import React from 'react';

const Expert = ({expert}) => {
    return (
        <div className='bg-amber-100 p-4  rounded-xl flex flex-col items-center'>
            <h2 className='text-[18px] font-semibold'>{expert.name}</h2>
            <p className='font-semibold text-blue-950'>{expert.specialist}</p>
            <p>{expert.visitingTime}</p>
        </div>
    );
};

export default Expert;