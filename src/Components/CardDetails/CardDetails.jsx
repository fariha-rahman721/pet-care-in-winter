

const CardDetails = ({ details }) => {


    return (
        <div className=" flex  gap-20 justify-center items-center p-8  ">
            
            <div className="">

                <img className="w-90 h-70"
                    src={details.image}
                    alt="" />

            </div>
            <div className=" bg-sky-50 p-5 rounded-2xl">
                <h1 className="text-2xl font-semibold">{details.serviceName}</h1>
                <p className="font-semibold">Category: <span className="text-pink-800">{details.category}</span></p>
                <p className="text-purple-950 font-bold">"{details.description}"</p>
                <p>Provided by <span className="font-semibold"> {details.providerName} </span></p>
                <p>Ratings: <span className="font-semibold">{details.rating}⭐⭐⭐</span></p>
                

                    <p className="mt-4">Available Slots: <span className="font-semibold">{details.slotsAvailable}</span></p>
                    <p>Price: <span className="font-semibold">$ {details.price}</span></p>
                    <p className="text-[15px] ">Contact us via email: <span className="font-bold">{details.providerEmail}</span></p>

            </div>
              
           

        </div>
    )
};

export default CardDetails;