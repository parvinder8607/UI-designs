import React from 'react'
import { FaFacebook, FaFacebookF, FaFacebookSquare, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full  bg-indigo-950 text-white'>
      <div className=" container mx-auto max-w-[1200px] h-full grid grid-cols-4 gap-4 py-24 px-2">
        <div className="h-full   flex flex-col  gap-6">
        <div className="text-4xl font-bold ">
          HealthCare
        </div>
        <div className="">
          Welcome to HealthCare, your trusted partner in comprehensive wellness solutions. We're dedicated to providing exceptional medical services, innovative healthcare technology, and compassionate patient care. 
        </div>
        <div className=" flex gap-2">
          <div className=" p-2 rounded-full bg-green-400 ">
            <FaInstagram />
          </div>
          <div className=" p-2 rounded-full bg-green-400 ">
            <FaFacebookF />
          </div>
          <div className=" p-2 rounded-full bg-green-400 ">
            <FaLinkedinIn />
          </div>
        </div>
        </div>
        <div className="h-full  pl-14 flex flex-col gap-6">
        <div className="text-2xl font-bold ">
          Quick Links
        </div>
        <div className="">
         <ul className="text-sm text-gray-300 font-semibold flex flex-col gap-2">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact Us</li>

         </ul>
        </div>
        </div>
        <div className="h-full  pl-14 flex flex-col gap-6">
        <div className="text-2xl font-bold ">
          Working Hours
        </div>
        <div className="">
        <ul className='text-sm  font-semibold flex flex-col gap-3'>
          <li>
            <div className='text-gray-300' >Monday – Saturday</div>
            8:00 am – 9:00 pm
          </li>
          <li>
          <div className='text-gray-300' >Sunday – Thursday</div>
          9.00 am – 6.00 pm
          </li>
          <li>
          <div className='text-gray-300' >Friday – Saturday</div>
          10.00 am – 8.00 pm
          </li>
        </ul>


        </div>
        </div>
        <div className="h-full  pl-14 flex flex-col gap-6">
        <div className="text-2xl font-bold ">
          Contact Us
        </div>
        <div className="">
            <ul className='text-sm  font-semibold flex flex-col gap-3'>
              <li>
                <div className='text-gray-300' >Address</div>
                123 HealthCare Street, City, Country
              </li>
              <li>
                <div className='text-gray-300' >Phone</div>
                +1 (123) 456-7890
              </li>
              <li>
                <div className='text-gray-300' >Email</div>
                info@healthcare.com
              </li>
            </ul>
        </div>
        </div>
      </div>
        <div className="border-t border-gray-400 text-center text-gray-300 text-sm py-4 ">
        Copyright © healthcare.com, All Rights Reserved 2025
        </div>
    </footer>
  )
}

export default Footer
