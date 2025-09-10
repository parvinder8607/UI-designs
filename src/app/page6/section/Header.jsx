import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='fixed z-50 top-0 left-0 w-full p-2 py-4 text-white bg-black ' >
        <div className="container mx-auto flex items-center justify-between">
            <div className="text-4xl font-bold">NGO</div>
            <nav>
                <ul className='flex gap-4' >
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Volunteer</li>
                </ul>
            </nav>
            <button className='border border-red-600 text-white py-2 px-4 rounded-full flex items-center gap-2 ' > 
        Donate Now <span className='inline-block p-2 bg-red-600 rounded-full' ><FaArrowRight className='text-xl' /></span>
      </button>
        </div>
    </header>
  )
}

export default Header
