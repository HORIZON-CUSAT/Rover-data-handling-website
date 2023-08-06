import React, { useState, useEffect } from 'react';
import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill, BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';

const Controls = () => {
  const [activeArrow, setActiveArrow] = useState(null);

  const handleArrowKey = (arrow) => {
    setActiveArrow(arrow);
    // Run your function based on the pressed arrow
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      handleArrowKey('up');
    } else if (event.key === 'ArrowDown') {
      handleArrowKey('down');
    } else if (event.key === 'ArrowLeft') {
      handleArrowKey('left');
    } else if (event.key === 'ArrowRight') {
      handleArrowKey('right');
    }
  };

  const handleKeyUp = () => {
    setActiveArrow(null);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className='p-4 border-2 border-black rounded-lg flex flex-col justify-center items-center'>
      <h1 className='text-xl font-bold mb-[13rem] text-gray-600'>Rover Controllers</h1>
      <div className='flex fixed'>
        <div className='flex flex-col items-center justify-center gap-y-2'>
          <BsFillArrowUpSquareFill
            className={`text-4xl ${activeArrow === 'up' ? 'text-green-500' : 'text-gray-500'} mb-2`}
          />
        <div className='flex flex-row items-center  gap-x-[3rem]'>
          <BsFillArrowLeftSquareFill
            className={`text-4xl ${activeArrow === 'left' ? 'text-green-500' : 'text-gray-500'} `}
          />
          <BsFillArrowRightSquareFill
            className={`text-4xl ${activeArrow === 'right' ? 'text-green-500' : 'text-gray-500'} `}
          />
        </div>
          <BsFillArrowDownSquareFill
            className={`text-4xl ${activeArrow === 'down' ? 'text-green-500' : 'text-gray-500'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;
