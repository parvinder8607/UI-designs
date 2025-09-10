import React from 'react'
import image1 from "@/assets/page2/images/mimage1.jpg";
import image2 from "@/assets/page2/images/mimage2.jpg";
import image3 from "@/assets/page2/images/mimage3.jpg";
import image4 from "@/assets/page2/images/mimage4.jpg";
import image5 from "@/assets/page2/images/mimage5.jpg";
import image6 from "@/assets/page2/images/mimage6.jpg";
import Image from 'next/image'


const Gallery = () => {
  return (
    <section className='w-full h-screen flex items-center bg-white'>
        <div className="container mx-auto h-2/3 grid grid-cols-24 grid-rows-12 gap-4 perspective-distant ">
            <div className="relative col-span-11 col-start-1 row-span-12 row-start-1 cursor-pointer gal-box ">
             <Image src={image6} alt="image1" fill className='object-cover rounded-3xl ' />
            </div>
            <div className="relative col-span-3  row-span-6 row-start-1 cursor-pointer gal-box ">
             <Image src={image3} alt="image1" fill className='object-cover rounded-3xl ' />
            </div>
            <div className="relative col-span-3  row-span-6 row-start-1 cursor-pointer gal-box ">
             <Image src={image2} alt="image1" fill className='object-cover rounded-3xl ' />
            </div>
            <div className="relative col-span-6  row-span-6 row-start-7 cursor-pointer gal-box ">
             <Image src={image4} alt="image1" fill className='object-cover rounded-3xl ' />
            </div>
            <div className="relative col-span-7  row-span-6 row-start-1 cursor-pointer gal-box ">
             <Image src={image5} alt="image1" fill className='object-cover rounded-3xl ' />
            </div>
            <div className="relative col-span-7  row-span-6  cursor-pointer gal-box ">
             <Image src={image1} alt="image1" fill className='object-cover rounded-3xl ' />
            </div>
        </div>
    </section>
  )
}

export default Gallery
