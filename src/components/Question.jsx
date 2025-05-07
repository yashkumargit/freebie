import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    que: 'Quam vehicula faucibus amet lorem.',
    ans: 'Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.',
  },
  {
    que: 'Pellentesque tempus sed phasellus vel.',
    ans: 'Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.',
  },
  {
    que: 'Mauris fermentum praesent tellus euismod pellentesque urna ac massa in.',
    ans: 'Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.',
  },
  {
    que: 'Vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et.',
    ans: 'Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.',
  },
  {
    que: 'Sollicitudin ornare tempus felis nulla varius pulvinar nibh viverra ornare.',
    ans: '',
  },
  {
    que: 'Consectetur nibh velit magna consectetur leo.',
    ans: 'Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.',
  },
  {
    que: 'Quisque porttitor vitae vel amet neque scelerisque mattis.',
    ans: 'Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.',
  },
];

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default open first question

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='max-w-[1350px] mx-auto mt-14 mb-5 space-y-6'>
      {faqData.map((item, index) => (
        <div
          key={index}
          className='bg-white rounded-3xl p-10 shadow-md transition-all duration-300 ease-in-out'
        >
          <div
            className='flex justify-between items-center cursor-pointer'
            onClick={() => toggleAnswer(index)}
          >
            <p className='text-2xl font-bold text-left'>{item.que}</p>
            <div className='w-12 h-12 flex items-center justify-center rounded-full bg-transparent hover:bg-[#f9b800] group transition-colors duration-300'>
              <FontAwesomeIcon
                icon={activeIndex === index ? faMinus : faPlus}
                className='text-3xl text-yellow-400 group-hover:text-white transition-colors duration-300'
              />
            </div>
          </div>
          {activeIndex === index && item.ans && (
            <div className='mt-4 text-fxl font-medium text-gray-700 animate-bounce-in'>
              {item.ans}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Question;
