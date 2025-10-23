import React from 'react';

const Hero = () => {
    return (
        <div className=''>
            <div className="carousel  w-full">
                
                <div id="item1" className="carousel-item w-full relative">
                    <img
                        src="/bg1.jpg"
                        className="w-full filter brightness-75 opacity-80" />
                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <img
                        src="/bg2.jpg"
                        className="w-full filter brightness-75 opacity-80" />
                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <img
                        src="/bg3.jpg"
                        className="w-full filter brightness-75 opacity-80" />
                </div>
                <div id="item4" className="carousel-item relative w-full">
                    <img
                        src="/bg4.jpg"
                        className="w-full filter brightness-75 opacity-80" />
                </div>
                <div id="item5" className="carousel-item relative w-full">
                    <img
                        src="/bg5.jpg"
                        className="w-full filter brightness-75 opacity-80" />
                </div>
                <div className="absolute inset-0 flex flex-col items-start justify-center text-center z-20 w-11/12 mx-auto p-8">
        <h1 className="text-6xl text-white font-extrabold drop-shadow-lg">
          WELCOME TO MY <br />
          <span className="text-orange-500">WARM PAWS</span>
        </h1>
        <p className='text-white font-semibold text-xl p-5'>Keeping every paw warm, happy, <br /> and safe this winter.</p>
      </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
            </div>
        </div>
    );
};

export default Hero;