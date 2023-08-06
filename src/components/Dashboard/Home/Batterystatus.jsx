import React from 'react';
import { FcChargeBattery } from 'react-icons/fc';

const BatteryStatus = () => {
  // Dummy rover data
  const rover = {
    name: 'Pheonix',
    isCharging: false,
    batteryPercentage: 80,
    temperature: 25, // in Celsius
    voltage: 12.5, // in volts
    health: 'Good',
  };

  return (
    <div className='border border-gray-700 w-[100%] h-[90%] rounded-lg p-3 mr-8 mb-5 bg-[#f4f4f4] bg-opacity-10'>
      <div className='flex flex-row mr-3'>
        <h1 className='text-[#f4f4f4] font-semibold text-sm flex-initial'>Rover Battery Status</h1>
        <FcChargeBattery size={24} className='ml-auto' />
      </div>
      <div className='mt-2 text-sm font-bold flex flex-col'>
        <p><span className='text-white '>Rover:</span> <span className='text-green-500'>{rover.name}</span></p>
        <p><span className='text-white'>Charging State:</span> {rover.isCharging ? <span className='text-green-500'>Charging</span> : <span className='text-green-500'>Charging</span>}</p>
        <p><span className='text-white'>Battery:</span> <span className='text-green-500'>{rover.batteryPercentage}% Charged</span></p>
        <p><span className='text-white'>Temperature:</span> <span className='text-green-500'>{rover.temperature}°C</span></p>
        <p><span className='text-white'>Voltage:</span> <span className='text-green-500'>{rover.voltage} V</span></p>
        <p><span className='text-white'>Health:</span> <span className='text-green-500'>{rover.health}</span></p>
      </div>
    </div>
  );
};

export default BatteryStatus;
