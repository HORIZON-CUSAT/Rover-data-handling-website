import React from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import { useParams } from 'react-router-dom';
import bg from '../../assets/bg.jpg'
import {FcChargeBattery} from 'react-icons/fc'
import Controls from '../../components/Dashboard/Home/Controls';

function Home() {
    const { id } = useParams();

    return (
        <div className='flex flex-row h-full overflow-hidden' style={{ backgroundImage: `url(${bg})` }}>
            <Sidebar />
            <div className='ml-[18rem] w-[80%] h-screen'>
                {id !== null && <h1 className='font-bold text-[#f4f4f4] text-xl mt-4 ml-2 '>Home</h1>}
                <div className='flex flex-col justify-center items-center mt-4'>
                    <h1 className='text-gray-300 font-bold text-xl'>Camera angles</h1>
                <div className='flex flex-row justify-center items-center gap-10 rounded-xl w-80% p-10 mr-7'>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='bg-gray-300 h-[130px] w-[220px] rounded-lg  '>

                        </div>
                        <h1 className='text-white font-bold text-lg mt-2'>Front</h1>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='bg-gray-300 h-[130px] w-[220px] rounded-lg  '>

                        </div>
                        <h1 className='text-white font-bold text-lg mt-2'>Rear</h1>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='bg-gray-300 h-[130px] w-[220px] rounded-lg  '>

                        </div>
                        <h1 className='text-white font-bold text-lg mt-2'>Side</h1>
                    </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center ml-8 gap-10 w-[90%] h-[50%] mt-[-1rem] border border-gray-800 rounded-xl'> 
                <div className='ml-5'>
                    <Controls/>
                </div>
                <button className='bg-red-700 p-7  text-white font-semibold rounded-xl w-30 text-sm h-20'>Emergency stop</button>
                <div className='border border-gray-700 w-[20%] h-[40%] rounded-lg p-3  mr-6 mb-5 bg-[#f4f4f4] bg-opacity-10'>
                    <div className='flex flex-row mr-5 '>
                        <h1 className='text-[#f4f4f4] font-semibold text-md flex-initial'>Battery status</h1>
                        <FcChargeBattery size={30} className='ml-auto'/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
