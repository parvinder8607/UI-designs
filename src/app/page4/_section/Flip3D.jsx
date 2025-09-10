import React from 'react'

const Flip3D = () => {
  return (
    <section className='w-full h-screen bg-black py-24 flex justify-center items-center flex-col gap-16' >
        <div className="border w-1/2 h-48 border-white mx-auto rounded-full bg-gray-50/20 backdrop-blur-lg">
        
        </div>
        <div className="flex items-center gap-6 group cursor-pointer">
          <div className=" group-hover:translate-x-[150%] w-16 p-3 aspect-square border-r-4 border-t-4  border-white rotate-45 transition-all duration-200 ">
            <div className=" border-white border-r-4 border-t-4 w-full h-full"></div>
          </div>
          <div className="w-24 p-3 aspect-square border-4 border-white rounded-full">
            <div className="w-full h-full rounded-full border-4  border-white"></div>
          </div>
          <div className="group-hover:-translate-x-[150%] w-16 p-3 aspect-square border-l-4 border-b-4 border-white rotate-45 transition-all duration-200 ">
          <div className=" border-white border-l-4 border-b-4 w-full h-full"></div>
           </div>

        </div>
      <div className="">
        this is osome thing that can be done by the developer as he is know all the details about comuter anad understaind <a href="
        l
        asdf
        
        ">    <div className="left-0.5
        asdfksdfkldsfklksdjkd;f;off"></div></a>
      </div>
        
    </section>
  )
}

export default Flip3D
