import React from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'
import bg from '../../assets/bg.jpg'

function Mapping() {
  return (
    <div className='flex flex-row h-screen overflow-hidden w-screen' style={{ backgroundImage: `url(${bg})` }}>
      <Sidebar/>
      <div>             
        uj
      </div>
    </div>
  )
}

export default Mapping
