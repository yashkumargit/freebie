import React from 'react'
import Commonbtn from './Commonbtn'

const Footer = () => {
  return (
    <div className="bg-[#262626] py-16 px-6 md:px-20 flex flex-col mb-20 rounded-[50px] h-[450px] max-w-[1400px] mx-auto mt-40">
        <div className='flex items-center justify-between  '>
           <h1 className='text-white font-bold text-5xl w-2/3 pb-20'> Vulputate et pulvinar ethre Suspendisse tellus consecteur</h1>
           <Commonbtn props="bg-white text-black" shadow="dark" />

        </div>
        <hr className="w-full h-[2px] bg-[#404040] border-0 rounded mt-2 " />
        <div className='flex items-center justify-between pt-16'>
            <p className='font-bold text-white font-lg'>Copyright © 2022 Lorem Ipsum.</p>
            <p className='font-bold text-white font-lg decoration: underline'>Privacy Policy | Terms and Conditions</p>
            
        </div>
    </div>
  )
}

export default Footer