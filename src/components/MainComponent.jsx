import React from 'react';
import Illustration from '../assets/MainComponent1.png';
import Commonbtn from './Commonbtn';

const MainComponent = () => {
  return (
    <div className="bg-[#f9b800] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between rounded-[90px] h-[700px] max-w-[1400px] mx-auto mt-40">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left m-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black pb-6 leading-tight">
          Phasellus a vitae<br />
          iaculis magna eleifend<br />
          pulvinar velit odio.
        </h1>

        <p className="text-[#1A1A1A] font-semibold underline underline-offset-4">
          Vulputate et vulputate suspendisse natoque!
        </p>

        <p className="text-[#1A1A1A] text-sm md:text-base">
          Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar
          duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et.
        </p>

        {/* Pass shadow="white" to make the arrow white */}
        <Commonbtn props="bg-[#262626] text-white" shadow="white" />
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img src={Illustration} alt="Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default MainComponent;
