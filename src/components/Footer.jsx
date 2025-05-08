import React from 'react'
import Commonbtn from './Commonbtn'

const Footer = () => {
  return (
    <div className="bg-[#262626] py-16 px-6 md:px-20 flex flex-col mb-20 rounded-[50px] h-[450px] max-w-[1400px] mx-auto mt-40">
        <div className='flex md:flex-row flex-col items-center md:justify-between text-center '>
           <h1 className='text-white font-bold md:text-5xl text-xl w-2/3 md:pb-20 pb-10'> Vulputate et pulvinar ethre Suspendisse tellus consecteur</h1>
           <Commonbtn props="bg-white text-black" shadow="dark" />

        </div>
        <hr className="w-full h-[2px] bg-[#404040] border-0 rounded md:mt-2 mt-10 " />
        <div className='flex md:flex-row flex-col items-center md:justify-between text-center md:pt-16 pt-8'>
            <p className='font-bold text-white font-lg'>Copyright © 2022 Lorem Ipsum.</p>
            <p className='font-bold text-white font-lg decoration: underline'>Privacy Policy | Terms and Conditions</p>
            
        </div>
    </div>
  )
}

export default Footer