import React from 'react';

const Camera = ({ title, img }) => {
  const cameraStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '130px',
    width: '220px',
    borderRadius: '10px',
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <div style={cameraStyle}></div>
      <h1 className='text-white font-bold text-lg mt-2'>{title}</h1>
    </div>
  );
};

export default Camera;
