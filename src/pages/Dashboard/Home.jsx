import React from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import { useParams } from 'react-router-dom';
import bg from '../../assets/bg.jpg'
import Controls from '../../components/Dashboard/Home/Controls';
import BatteryStatus from '../../components/Dashboard/Home/Batterystatus';
import Camera from '../../components/Dashboard/Home/Camera';
import front from '../../assets/front.png'
import rear from '../../assets/rear.png'
import side from '../../assets/side.png'

function Home() {
    const { id } = useParams();

    return (
        <div className='flex flex-row h-full overflow-hidden' style={{ backgroundImage: `url(${bg})` }}>
            <Sidebar />
            <div className='ml-[18rem] w-[80%] h-screen'>
                {id !== null && <h1 className='font-bold text-gray-300 text-xl mt-4 ml-2 '>Home</h1>}
                <div className='flex flex-col justify-center items-center mt-4'>
                    <h1 className='text-gray-300 font-bold text-xl'>Camera angles</h1>
                    <div className='flex flex-row justify-center items-center gap-10 rounded-xl w-80% p-10 mr-7'>
                        <div className='flex justify-center items-center flex-row gap-10'>
                            <Camera title='Front' img={front}/>
                            <Camera title='Rear' img={rear}/>
                            <Camera title='Side' img={side}/>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center ml-0 gap-10 w-[98%] h-[50%] mt-[-1rem] border border-gray-800 rounded-xl'> 
                        <div className='ml-2'>
                            <Controls/>
                        </div>
                        <button className='bg-red-700 p-7  text-white font-semibold rounded-xl w-30 text-sm h-20'>Emergency stop</button>
                        <div className='mr-5'>
                            <BatteryStatus/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
