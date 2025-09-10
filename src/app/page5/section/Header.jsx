import React from 'react'

const Header = () => {
  return (
    <header className='fixed w-full  bg-white py-4 px-2 border-b border-gray-200 z-50' >
        <div className="container mx-auto h-full flex items-center justify-between" >
         <div className="text-2xl font-bold" >
          HealthCare
         </div>
         <nav>
          <ul className='flex items-center gap-8 font-semibold' >
            <li className='hover:text-blue-500 transition-all duration-100 cursor-pointer' >Home</li>
            <li className='hover:text-blue-500 transition-all duration-100 cursor-pointer' >About</li>
            <li className='hover:text-blue-500 transition-all duration-100 cursor-pointer' >Departments</li>
            <li className='hover:text-blue-500 transition-all duration-100 cursor-pointer' >Contact</li>
          </ul>
         </nav>
         <button className='bg-blue-500 hover:bg-green-400 transition-all duration-100 text-white px-6 py-2 rounded-full cursor-pointer'  >
          Get Appointment
         </button>
        </div>
    </header>
  )
}

export default Header
