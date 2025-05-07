import React from 'react'
import icon from '../assets/icon.png'
const Keypoints = ({props,bgColor='bg-white'}) => {
  return (
    <div>
        <button className={`p-1 w-[auto] text-bold text-black-md ${bgColor} flex items-center rounded-full `}>
            <img src={icon} alt="" className='p-2' />
            <span className='pr-6'>{props}</span>
        </button>
    </div>
  )
}

export default Keypoints