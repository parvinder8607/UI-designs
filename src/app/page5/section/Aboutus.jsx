import React from 'react'

const Aboutus = () => {
  return (
    <section className='about relative w-full h bg-black ' >
        <div className="relative z-10  container mx-auto h-full  py-24  grid grid-cols-12 px-2">
         <div className="col-start-7 col-span-5 bg-blue-600 h-full rounded-4xl p-8 py-16 ">
            <div className="flex flex-col justify-center  h-full">
            <span className='text-white text-lg font-bold'>About Us</span>
            <h2 className='text-white text-4xl font-bold'>
            Health Care, for
            Everyone, Everywhere
            </h2>
            <p className='text-white text-lg font-medium mt-4'>
            We are a leading healthcare provider dedicated to delivering high-quality, compassionate care to our patients. With a team of experienced and dedicated healthcare professionals, we strive to improve the health and well-being of our community.
            </p>
            <ul className="mt-8 space-y-4">
                <li className="text-white flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full"></span>Comprehensive medical services for all age groups</li>
                <li className="text-white flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full"></span>State-of-the-art facilities and modern equipment</li>
                <li className="text-white flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full"></span>24/7 emergency care and patient support</li>
            </ul>
            <button className="bg-white w-fit text-blue-600 px-6 py-3 rounded-full mt-8">
                Learn More
            </button>
            </div>
         </div>
        </div>
    </section>
  )
}

export default Aboutus
