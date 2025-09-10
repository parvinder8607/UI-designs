import React from 'react'
import { BsMortarboard } from "react-icons/bs";
import { BiDonateHeart } from "react-icons/bi";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { LuHeartHandshake } from "react-icons/lu";

const Services = () => {

    const service=[
     {
      icon:<BsMortarboard className='-rotate-45 text-4xl' />,

        title:'Education',
        description:'Empowering minds through quality education, shaping tomorrow\'s leaders with knowledge and skills that transform lives and communities.'
     },
     {
      icon:<BiDonateHeart className='-rotate-45 text-4xl' />,

        title:'HealthCare',
        description:'Providing compassionate healthcare, ensuring well-being and hope for a healthier, brighter future.'
     },
     {
      icon:<LuHeartHandshake className='-rotate-45 text-4xl' />,

        title:'Inspire Help',
        description:'Providing nourishment for a better tomorrow, ensuring that no one goes hungry and everyone has the resources to thrive.'
     },
     {
      icon:<LiaHandHoldingUsdSolid className='-rotate-45 text-4xl' />,

        title:'Fund Raised',
        description:'Providing nourishment for a better tomorrow, ensuring that no one goes hungry and everyone has the resources to thrive.'
     }

    ]   


  return (
    <section className='w-full  bg-gray-800 py-24 px-2' >
        <div className="container mx-auto h-full">
        <div className="text-center">
            <span className='text-red-600 text-lg' >Our Service</span>
            <h2 className='max-w-[40%] mx-auto text-white text-4xl font-semibold' >
            We Service Now help Poor
            people Lifes
            </h2>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 mt-16">
        {
          service.map((item,index)=>(
            <div key={index} className='bg-black/30 text-white p-4 py-10 rounded-lg shadow-lg' >
                <div className="flex flex-col text-center items-center gap-4" >
                    <div className=" border p-4 rounded-2xl rotate-45 bg-red-600 text-white" >
                    {item.icon}
                    </div>
                    <h3 className='text-2xl font-semibold' >{item.title}</h3>
                <p className='text-gray-600 ' >{item.description}</p>
                </div>
            </div>
          ))
        }

        </div>
        </div>
    </section>
  )
}

export default Services
