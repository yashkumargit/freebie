import React from 'react';
import Illustration from '../assets/MainComponent2.png';
import Commonbtn from './Commonbtn';
import Keypoints from './Keypoints';

const MainComponent2 = ({ bgcolor = 'bg-[#FFFAEB]' }) => {
  const texts = [
    { text: 'Ac viverra sed risus praesent vulputate' },
    { text: 'Cursus Integer consequat Tristique.' },
    { text: 'Natoqu con' },
    { text: 'Sollicitudin ornare tempus nulla varius pulvinar' }
  ];

  return (
    <div className="relative bg-white py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between rounded-[50px] md:rounded-[90px] max-w-[1400px] mx-auto mt-40">
      
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left flex flex-col items-center md:items-start mt-10 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
          Cursus Integer consequat Tristique.
        </h1>

        {texts.map((item, index) => (
          <Keypoints key={index} props={item.text} bgColor={bgcolor} />
        ))}

        <Commonbtn props="bg-[#F9B800] text-black" shadow="dark" />
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={Illustration} alt="Illustration" className="w-full max-w-[500px] h-auto" />
      </div>
    </div>
  );
};

export default MainComponent2;
