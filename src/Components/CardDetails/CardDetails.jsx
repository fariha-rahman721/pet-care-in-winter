

const CardDetails = ({ details }) => {


    return (
        <div className="w-11/12 lg:w-11/12 flex flex-col mx-auto gap-10 justify-center items-center p-8 bg-linear-to-r from-orange-100 via-orange-200 to-orange-300 rounded-2xl shadow-lg mt-10">
            
            <div className="">

                <img className="w-60 h-50 lg:w-96 lg:h-86 rounded-xl"
                    src={details.image}
                    alt="" />

            </div>
            <div className=" ">
                <h1 className="text-2xl font-semibold">{details.serviceName}</h1>
                <p className="font-semibold text-[18px] mb-3">Category: <span className="text-pink-900 font-bold">{details.category}</span></p>
                <p className="text-purple-950 text-xl font-bold mb-3">"{details.description}"</p>
                <p className="font-semibold text-[18px]">Provided by <span className="font-bold text-pink-900"> {details.providerName} </span></p>
                <p className="font-semibold text-[18px]">Ratings: <span className="font-bold text-pink-900">{details.rating}⭐⭐⭐</span></p>
                

                    <p className="mt-4 font-semibold text-[18px]">Available Slots: <span className="font-bold text-pink-900">{details.slotsAvailable}</span></p>
                    <p className="font-semibold text-[18px]">Price: <span className="font-bold text-pink-900">$ {details.price}</span></p>
                    <p className="text-[18px] font-semibold">Contact us via email: <span className="font-bold text-pink-800">{details.providerEmail}</span></p>

            </div>
              
           

        </div>
    )
};

export default CardDetails;