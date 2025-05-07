import React, { useState } from 'react';
import arrowblack from '../assets/icon (1).png';
import arrowwhite from '../assets/east.png';

const Commonbtn = ({ props, shadow = 'black' }) => {
  const [hovered, setHovered] = useState(false);

  const shadowColorMap = {
    yellow: '#f9b800',
    white: '#ffffff',
    black: '#000000',
    dark: '#262626',
  };

  // Ensure the shadow prop is mapped correctly to a valid color
  const shadowColor = shadowColorMap[shadow] || '#000';

  // Set the arrow to be white if shadow is 'white', else default to arrowdown
  const arrowIcon = shadow === 'white' ? arrowwhite : arrowblack;

  return (
    <button
      className={`${props} w-[300px] flex items-center justify-between font-medium p-5 rounded-full transition-all duration-300 relative
        ${hovered ? 'before:content-[""] before:absolute before:inset-0 before:rounded-full before:bg-[var(--shadow-color)] before:translate-x-[8px] before:translate-y-[8px] before:-z-10' : ''}`}
      style={hovered ? { '--shadow-color': shadowColor } : {}}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <span className="font-bold text-xl">Lorem Ipsum</span>
      <img
        src={arrowIcon}
        alt="Arrow"
        className={`${shadow=='white'? 'h-4' : 'h-6'} w-6 ml-10 mr-2 transition-all duration-300 ${hovered ? 'rotate-90' : ''}`}
      />
    </button>
  );
};

export default Commonbtn;
