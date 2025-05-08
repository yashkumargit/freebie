// import React, { useEffect, useState } from 'react';
// import Commonbtn from './Commonbtn';
// import Keypoints from './Keypoints';

// const Hero = () => {
//   const fullText = "Cursus Consequat Tristique.|";
//   const [displayedText, setDisplayedText] = useState('');
//   const [isdeleting,setisdeleting] = useState(false);
//   const [index,setindex] = useState(0);

//   useEffect(()=>{
//       const interval = setInterval(() => {
//     if(!isdeleting){
//             setDisplayedText(fullText.slice(0,index));
//             setindex((prev)=>prev+1) ;
//             if(index>fullText.length){
//                 setisdeleting(true);
//             }
//         }
//         else{
//             setDisplayedText(fullText.slice(0,index));
//             setindex((prev)=>prev-1);
            
//             if(index==0){
//                 setisdeleting(false);
//             }
//         }
//     }, 50);
//   return () => clearInterval(interval);
//   },[index,isdeleting])

//   return (
//     <div className='flex flex-col items-center justify-center mt-20 gap-10'>
//       <p className='font-bold text-2xl text-[#F9B800]'>RISUS PRAESENT VULPUTATE. </p>
//       <h1 className='font-bold text-7xl whitespace-nowrap'>{displayedText}</h1>

//       <div className='flex gap-5 mb-[-20px] flex-wrap justify-center'>
//         <Keypoints props={"cursus integer"} />
//         <Keypoints props={"Integer Consequat"} />
//         <Keypoints props={"Tellus Euismod Pellentesque"} />
//         <Keypoints props={"Aliquot Tritique"} />
//       </div>

//       <div className='flex gap-5 flex-wrap justify-center'>
//         <Keypoints props={"Pellentesque Tempus"} />
//         <Keypoints props={"Mauris Fermentum Praesent"} />
//       </div>

//       <Commonbtn />
//     </div>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from 'react';
import Commonbtn from './Commonbtn';
import Keypoints from './Keypoints';

const Hero = () => {
  const staticText = "Cursus Consequat ";
  const animatedText = "Tristique.";
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 80;
    const timeout = setTimeout(() => {
      setDisplayed(animatedText.substring(0, index));

      if (!isDeleting && index < animatedText.length) {
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setIndex((prev) => prev - 1);
      } else if (!isDeleting && index === animatedText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div className='flex flex-col items-center justify-center mt-20 gap-10 px-4'>
      <p className='font-bold text-xl sm:text-2xl text-[#F9B800] text-center'>
        RISUS PRAESENT VULPUTATE.
      </p>

      <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center break-words whitespace-normal'>
        {staticText}
        <span className='text-black'>{displayed}</span>
        <span className='text-black animate-pulse'>|</span>
      </h1>

      <div className='flex gap-5 flex-wrap justify-center mb-[-20px] px-2'>
        <Keypoints props={"cursus integer"} />
        <Keypoints props={"Integer Consequat"} />
        <Keypoints props={"Tellus Euismod Pellentesque"} />
        <Keypoints props={"Aliquot Tritique"} />
      </div>

      <div className='flex gap-5 flex-wrap justify-center px-2'>
        <Keypoints props={"Pellentesque Tempus"} />
        <Keypoints props={"Mauris Fermentum Praesent"} />
      </div>

      <Commonbtn props="bg-[#F9B800] text-black" shadow="dark" />
    </div>
  );
};

export default Hero;
