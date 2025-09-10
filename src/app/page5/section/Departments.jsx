import React from 'react'
import { TbEmergencyBed } from "react-icons/tb";
import { RiToothLine } from "react-icons/ri";
import { BsLungs } from "react-icons/bs";
import { LuBrain } from "react-icons/lu";
import { TbEyePlus } from "react-icons/tb";
import { PiKnife } from "react-icons/pi";



const Departments = () => {

    const departments = [
        {
            icon: <TbEmergencyBed className='text-4xl' />,
            title : "Emergency Care",
            description : "Emergency care is a critical component of healthcare, providing immediate and specialized treatment for individuals experiencing sudden illnesses or injuries."
        },
        {
            icon: <RiToothLine className='text-4xl' />,
            title : "Dental Care",
            description : "Dental care is a vital aspect of overall health, focusing on the prevention, diagnosis, and treatment of oral health issues."
        },
        {
            icon: <BsLungs className='text-4xl' />,
            title : "Respiratory Care",
            description : "Respiratory care is a specialized field that focuses on the diagnosis, treatment, and management of respiratory conditions and disorders."
        },
        {
            icon: <LuBrain className='text-4xl' />,
            title : "Neurology",
            description : "Neurology is a medical specialty that focuses on the diagnosis, treatment, and management of disorders and diseases of the nervous system."
        },
        {
            icon: <TbEyePlus className='text-4xl' />,
            title : "Ophthalmology",
            description : "Ophthalmology is a medical specialty that focuses on the diagnosis, treatment, and management of eye-related conditions and diseases."
        },
        {
            icon: <PiKnife className='text-4xl' />,
            title : "Surgery",
            description : "Surgery is a medical specialty that involves the use of medical instruments and techniques to treat or prevent diseases and injuries."
        }
    ]
        


  return (
    <section className='w-full  bg-gray-50' >
        <div className="container mx-auto h-full py-24 px-2 ">
            <div className=" text-center">
                <span className='text-blue-500 text-lg font-bold' >
                    Our Departments
                </span>
                <h2 className=' max-w-1/2 mx-auto text-4xl font-bold mt-2' >    
                Comprehensive Healthcare
                Solutions For You
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10" >
            {
                    departments.map((department, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-lg" >
                            <div className="flex flex-col items-center gap-4" >
                                <div className="border rounded-full p-4 bg-blue-500 text-white">
                                {department.icon}
                                </div>
                                <h3 className='text-2xl font-bold' >
                                    {department.title}
                                </h3>
                                <p className='text-gray-500 text-center' >
                                    {department.description}
                                </p>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Departments
