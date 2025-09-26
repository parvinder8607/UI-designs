import React from 'react'

const Focus = () => {
  return (
   <section className='w-full h-screen flex justify-center items-center bg-white text-black' >
    <div className="flex">
        <div className="text-[102px] aspect-square w-[200px] blur-sm flex justify-center items-center border-gray-200 border">F</div>
        <div className="relative text-[102px] aspect-square w-[200px] flex justify-center items-center border-gray-200 border">
            <div className=" absolute top-0 left-0 w-8 border-l-4 border-t-4  aspect-square "></div>
            <div className=" absolute top-0 right-0 w-8 border-t-4 border-r-4   aspect-square "></div>
            <div className=" absolute bottom-0 left-0 w-8 border-b-4 border-l-4  aspect-square "></div>
            <div className=" absolute bottom-0 right-0 w-8 border-b-4 border-r-4  aspect-square "></div>
            O</div>
        <div className="text-[102px] aspect-square w-[200px] blur-sm flex justify-center items-center border-gray-200 border">C</div>
        <div className="text-[102px] aspect-square w-[200px] blur-sm flex justify-center items-center border-gray-200 border">U</div>
        <div className="text-[102px] aspect-square w-[200px] blur-sm flex justify-center items-center border-gray-200 border">S</div>
    </div>
   </section>
  )
}

export default Focus