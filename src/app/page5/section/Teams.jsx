import React from 'react'
import image1 from "@/assets/page5/images/doc1.jpg"
import image2 from "@/assets/page5/images/doc2.jpg"
import image3 from "@/assets/page5/images/doc3.jpg"
import image4 from "@/assets/page5/images/doc4.jpg"
import Image from 'next/image'

const Teams = () => {

  const teams = [
    {
      name : "Dr. Alice Smith",
      position : "Cardiologist",
      image : image1,
    },
    {
      name : "Dr. Ajay Patel",
      position : "Dentist",
      image : image2
    },
    {
      name : "Dr. Emma Watson",
      position : "Cardiologist",
      image : image3
    },
    {
      name : "Dr. David Johnson",
      position : "Dentist",
      image : image4
    }
  ]

  return (
    <section className='w-full  py-24 px-2 bg-gray-50' >
        <div className="container mx-auto h-full" >
          <div className="text-center" >
            <span className='text-lg text-blue-500 font-bold' >Expert Doctors</span>
            <h2 className=' max-w-1/2 mx-auto text-4xl font-bold mt-2' >
            Meet Our Expert Healthcare
            Consultants
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-10" >
            {
              teams.map((team, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-2 py-10 " >
                  <Image src={team.image} alt={team.name} className="w-3/4 aspect-square object-cover rounded-full" />
                  <div className="flex flex-col items-center justify-center gap-2 p-4" >
                    <h3 className='text-2xl font-bold' >{team.name}</h3>
                    <span className='text-lg text-gray-500' >{team.position}</span>
                  </div>
                </div>
              ))
            }
            </div>
        </div>
    </section>
  )
}

export default Teams
