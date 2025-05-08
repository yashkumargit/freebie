import React from 'react';
import logo from '../assets/logo.png';
import flag from '../assets/flag.png';
import dropdown from '../assets/arrow_drop_down.png';

const Navbar = () => {
  return (
    <div className="mx-4 md:mx-8 my-4 md:my-6 px-4 md:px-6">
      <div className="flex justify-between items-center flex-wrap py-3">
        <img src={logo} alt="Logo" className="h-10 md:h-12" />

        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <img src={flag} alt="Flag" className="h-4 md:h-5" />
          <img src={dropdown} alt="Dropdown" className="h-3 md:h-4" />
        </div>
      </div>

      <hr className="w-full h-[1.5px] bg-[#e5e0d3] border-0 rounded mt-2" />
    </div>
  );
};

export default Navbar;
