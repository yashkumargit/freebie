import React from 'react';
import Illustration from '../assets/maincomponent1.png';
import Commonbtn from './Commonbtn';

const MainComponent = () => {
  return (
    <div className="relative bg-[#f9b800] py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between rounded-[50px] md:rounded-[90px] max-w-[1400px] mx-auto mt-40">
      
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left flex flex-col items-center md:items-start mt-10 md:mt-0 px-2 md:px-0">
        <h1 className="text-3xl md:text-5xl font-bold text-black pb-4 leading-tight">
          Phasellus a vitae<br />
          iaculis magna eleifend<br />
          pulvinar velit odio.
        </h1>

        <p className="text-[#1A1A1A] font-semibold underline underline-offset-4">
          Vulputate et vulputate suspendisse natoque!
        </p>

        <p className="text-[#1A1A1A] text-sm md:text-base max-w-[90%] md:max-w-full">
          Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar
          duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et.
        </p>

        <Commonbtn props="bg-[#262626] text-white" shadow="white" />
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={Illustration} alt="Illustration" className="w-full max-w-[500px] h-auto" />
      </div>
    </div>
  );
};

export default MainComponent;
