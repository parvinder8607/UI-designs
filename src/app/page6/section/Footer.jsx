import React from 'react'
import image1 from '@/assets/page6/about1.jpg'
import image2 from '@/assets/page6/donation.jpg'
import image3 from '@/assets/page6/donation2.jpg'
import image4 from '@/assets/page6/home.jpg'
import image5 from '@/assets/page6/volunteer1.jpg'
import image6 from '@/assets/page6/volunteer2.jpg'

const Footer = () => {

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,

  ];


  return (
    <footer className='w-full h-[50vh] bg-black text-white py-24'>
        <div className="container mx-auto h-full ">
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="">
              <h2 className='text-4xl font-bold'>NGO</h2>
              <div className="mt-8">
              <p className='text-sm'>Empowering communities through compassion, one life at a time. Join us in making a difference that lasts generations.</p>
              <div className="flex gap-4 mt-4">
                <div className="w-10 h-10 bg-red-600 rounded-full"></div>
                <div className="w-10 h-10 bg-red-600 rounded-full"></div>
                <div className="w-10 h-10 bg-red-600 rounded-full"></div>
              </div>
              </div>
             
            </div>
            <div className="">
            <h2 className='text-2xl font-semibold'>Gallery</h2>
              <div className="mt-8 grid grid-cols-3 gap-4">
              {
                images.map((image, index) => (
                  <div key={index} className="w-full h-24 bg-red-600 rounded-md overflow-hidden">
                    <img src={image.src} alt="image" className="w-full h-full object-cover" />
                  </div>
                ))
              }
              </div>
            </div>
            <div className="">
            <h2 className='text-2xl font-semibold'>Latest News</h2>
              <div className="mt-8 flex flex-col gap-4">
              <div className="bg-white/10 p-4 px-6 rounded-2xl" >
                <h4 className='text-lg text-gray-500'>Change your Life Through
                Education</h4>
                <div className="text-red-600">July, 21, 2025</div>
              </div>
              <div className="bg-white/10 p-4 px-6 rounded-2xl" >
                <h4 className='text-lg text-gray-500'>Donate your woolens this
                winter</h4>
                <div className="text-red-600">July, 21, 2025</div>
              </div>
              </div>
            </div>
            <div className="">
            <h2 className='text-2xl font-semibold'>Contact Us</h2>
              <div className="mt-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-400">123 Street, New York, USA</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-400">+012 345 67890</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-400">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
