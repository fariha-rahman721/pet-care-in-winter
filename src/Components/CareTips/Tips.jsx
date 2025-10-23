import React from 'react';

const Tips = ({ tips }) => {
    return (
        <div className="card w-96 card-md shadow-sm bg-purple-50">
            <div className="card-body flex flex-col">
                <span className='text-xl text-purple-700 font-bold'>Tips-{tips.id}</span>
                <h2 className="card-title"> {tips.title}</h2>
                <p>{tips.tips}</p>
                
            </div>
        </div>
    );
};

export default Tips;