import React from 'react';
import customer from '../assets/customer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import './Customerview.css';

const Customerview = () => {
  return (
    <div className="relative group overflow-hidden bg-white py-16 px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col md:flex-row items-center rounded-[40px] md:rounded-[80px] h-auto md:h-[550px] max-w-[1400px] mx-auto mt-40 md:mt-80 transition-all duration-500 ease-in-out">

      {/* Animated background image */}
      <div
        className="animated-bg absolute inset-0 z-0"
        style={{ backgroundImage: `url(${customer})` }}
      />

      {/* Foreground image */}
      <div className="relative z-20 w-full md:w-[35%] px-6 md:px-10 mb-8 md:mb-0">
        <img src={customer} alt="customer" className="w-full h-auto" />
      </div>

      {/* Text Content */}
      <div className="relative z-20 w-full md:w-[60%] text-content transition-all duration-500 px-4 md:px-0">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-left pb-6 sm:pb-10">
          What our customers thought?
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-left pb-6 sm:pb-8 leading-relaxed">
          Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis.
        </p>
        <p className="font-bold text-base sm:text-lg md:text-xl">Holly Davidson</p>
        <div className="pt-6 sm:pt-8 flex items-center gap-6">
          <FontAwesomeIcon icon={faArrowLeftLong} size="lg" style={{ color: '#0d0d0d' }} />
          <FontAwesomeIcon icon={faArrowRightLong} size="lg" style={{ color: '#FFD43B' }} />
        </div>
      </div>
    </div>
  );
};

export default Customerview;
