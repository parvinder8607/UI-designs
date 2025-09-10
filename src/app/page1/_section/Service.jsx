'use client'
import { Inter } from "next/font/google";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useRef } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Service = () => {

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slideRef  = useRef();

  const handleNext = () => {
    if (currentSlide < service.length - 1) {
      setCurrentSlide(prev => prev + 1);
      slideRef.current.style.transform = `translateX(-${(currentSlide + 1) * 410}px)`;
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
      slideRef.current.style.transform = `translateX(-${(currentSlide - 1) * 410}px)`;
    }
  };

  const service = [
    {
      id: 1,
      number: "1",
      title: "Digital Studio",
      description: "Where creativity meets technology. Our digital studio is a powerhouse of innovation, bringing together expert designers, developers, and strategists to craft immersive digital experiences that captivate and inspire."
    },
    {
      id: 2,
      number: "2",
      title: "Web Development",
      description: "Creating powerful, responsive, and user-friendly websites that drive results. Our development team combines cutting-edge technologies with clean code to build scalable digital solutions that perform flawlessly."
    },
    {
      id: 3,
      number: "3",
      title: "Brand Strategy",
      description: "Developing compelling brand narratives and visual identities that resonate with your audience. We help position your brand for success through strategic thinking, market analysis, and creative storytelling."
    },
    {
      id: 4,
      number: "4",
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user experiences through thoughtful interface design. We create seamless digital journeys that delight users while achieving your business objectives."
    },
    {
      id: 5,
      number: "5",
      title: "Digital Marketing",
      description: "Implementing data-driven marketing strategies to boost your online presence. From SEO to social media campaigns, we help you reach and engage your target audience effectively."
    }
  ];
  return (
    <section className={`${inter.className}w-full h-screen bg-black`}>
      <div className="container mx-auto h-full  grid grid-cols-12 grid-rows-6 py-[96px]">
        <div className="col-span-6 col-start-1 row-span-2 row-start-1  flex flex-col gap-6 text-white">
          <h1 className="text-[68px] leading-[110%]  ">
            CRAFTING DIGITAL EXCELLENCE
          </h1>
          <p className="text-sm text-white/70">
            We transform ideas into exceptional digital experiences. Our team of
            passionate creators and innovators combines cutting-edge technology
            with artistic vision to deliver solutions that not only meet but
            exceed expectations. From stunning web designs to powerful digital
            strategies, we're here to elevate your brand's digital presence.
          </p>
        </div>
        <div className="relative col-span-8 col-start-5 row-span-3 row-start-4  ">
          <div className="absolute flex gap-6 bottom-0 left-0 -translate-x-[125%]">
            <div onClick={handlePrev}>
              <FaArrowLeft className="text-white text-6xl cursor-pointer" />
            </div>
            <div onClick={handleNext}>
              <FaArrowRight className="text-white text-6xl cursor-pointer" />
            </div>
          </div>
          <div className=" h-full flex gap-2 py-4 shrink-0 overflow-hidden justify-between">
            <div ref={slideRef} className="flex gap-4 transition-transform duration-300">
              {service.map((item) => (
                <div key={item.id} className="w-[400px] h-full flex flex-col justify-end shrink-0 rounded-2xl bg-gray-500/15 border border-white/35 p-4">
                  <div className="flex items-end">
                    <h2 className="text-white text-[128px] leading-[80%]">
                      {item.number}
                    </h2>
                    <h3 className="text-white text-5xl">{item.title}</h3>
                  </div>
                  <p className="text-sm text-white/70 mt-4">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;