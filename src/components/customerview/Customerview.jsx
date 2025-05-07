import React from 'react';
import customer from '../assets/customer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import './Customerview.css';

const Customerview = () => {
  return (
    <div className="relative group overflow-hidden bg-white py-16 px-6 md:px-20 flex items-center rounded-[80px] h-[550px] max-w-[1400px] mx-auto mt-80 transition-all duration-500 ease-in-out">
      
      {/* Animated background image as a CSS background */}
      <div
        className="animated-bg absolute inset-0 z-0"
        style={{ backgroundImage: `url(${customer})` }}
      />

      {/* Foreground image */}
      <div className="relative z-20 w-[35%] p-10">
        <img src={customer} alt="customer" className="w-full h-auto" />
      </div>

      {/* Text Content */}
      <div className="relative z-20 w-[60%] text-content transition-all duration-500">
        <p className="text-4xl font-bold text-left pb-10">
          What our customers thought?
        </p>
        <p className="text-3xl text-left pb-8">
          Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis.
        </p>
        <p className="font-bold text-xl">Holly Davidson</p>
        <div className="pt-8 flex items-center gap-6">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            size="lg"
            style={{ color: '#0d0d0d' }}
          />
          <FontAwesomeIcon
            icon={faArrowRightLong}
            size="lg"
            style={{ color: '#FFD43B' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Customerview;
