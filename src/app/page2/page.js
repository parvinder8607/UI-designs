import React from 'react'
import HeroPage from './_section/HeroPage'
import Section2 from './_section/Section2'
import { Raleway } from 'next/font/google';
import Section3 from './_section/Section3';
import Gallery from './_section/Gallery';
import Section4 from './_section/Section4';
import Section5 from './_section/Section5';
import Section6 from './_section/Section6';
import Section7 from './_section/Section7';
import Section8 from './_section/Section8';
import Section9 from './_section/Section9';
import Section10 from './_section/Section10';




const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});



const page = () => {
  return (
    <main className={`${raleway.className}`}>
   {/* <Section10 /> */}
    <HeroPage />
    <Section2 />
    <Section3 />
    <Section4 />
    <Gallery />
    <Section5 />
    <Section7 />
    <Section6 />
    <Section7 />
    <Section8 />
    <Section7 />
    </main>
  )
}

export default page
