import React from 'react'
import { LiaAwardSolid } from "react-icons/lia";
import { TbHeartPlus } from "react-icons/tb";
import { CiStethoscope } from "react-icons/ci";
import { LiaUserNurseSolid } from "react-icons/lia";

const Statistics = () => {

  const statistics = [
    {
        icon : <TbHeartPlus className="text-4xl" />,
        title : "500+",
        description : "Happy Patients"
    },
    {
        icon : <CiStethoscope className="text-4xl" />,
        title : "20+",
        description : "Qualified Doctors"
    },
    {
        icon : <LiaUserNurseSolid className="text-4xl" />,
        title : "1000+",
        description : "Medical Staff"
    },
    {
        icon : <LiaAwardSolid className="text-4xl" />,
        title : "10+",
        description : "Awards Won"
    }
  ]


  return (
    <section style={{backgroundImage: 'linear-gradient(to left, rgba(41, 205, 120, 0.08) 0%, rgba(49, 61, 247, 0.08) 100%)'}} className='w-full  py-24 px-2 bg-gray-50' > 
        <div className="container mx-auto h-full ">
          <div className="text-center">
            <span className='text-lg text-blue-500 font-bold' >Our Statistics</span>
            <h2 className=' max-w-1/2 mx-auto text-4xl font-bold mt-2' >
            Numbers That Reflect Our
            Commitment to You
            </h2>
          </div>
          <div className=" max-w-[1200] mx-auto grid grid-cols-4 gap-4 mt-10" >
           {
            statistics.map((statistic, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-2 py-10 border border-gray-200 bg-white rounded-2xl shadow-xl" >
                <div className="bg-blue-500 rounded-full p-4 text-white" >
                  {statistic.icon}
                </div>
                <h3 className='text-2xl font-bold' >{statistic.title}</h3>
                <p className='text-gray-500' >{statistic.description}</p>
              </div>
            ))
           }
          </div>
        </div>
    </section>
  )
}

export default Statistics
