import React from 'react';
import logo from '../assets/logo.png';
import flag from '../assets/flag.png';
import dropdown from '../assets/arrow_drop_down.png';

const Navbar = () => {
  return (
    <div className="mx-[30px] my-[30px] px-6">
      <div className="flex justify-between items-center  py-3 ">
        <img src={logo} alt="Logo" className="h-12" />
        <div className="flex items-center space-x-2">
          <img src={flag} alt="Flag" className="h-5" />
          <img src={dropdown} alt="Dropdown" className="h-4" />
        </div>
      </div>
      <hr className="w-full h-[2px] bg-[#e5e0d3] border-0 rounded mt-2 " />
    </div>
  );
};

export default Navbar;
