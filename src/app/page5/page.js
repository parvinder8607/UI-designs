import React from 'react'
import Home from './section/Home'
import Departments from './section/Departments'
import Statistics from './section/Statistics'
import Teams from './section/Teams'
import NeedHelp from './section/NeedHelp'
import GetAppoint from './section/GetAppoint'
import Testimonial from './section/Testimonial'
import News from './section/News'
import Awards from './section/Awards'
import Footer from './section/Footer'
import { Raleway } from 'next/font/google'
import Aboutus from './section/Aboutus'
import Header from './section/Header'


const raleway = Raleway({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const page = () => {
  return (
    <main className={` ${raleway.className}`} >
        <Header />
        <Home />
        <Departments />
        <Aboutus />
        <Statistics />
        <Teams />
        <NeedHelp />
        {/* <GetAppoint />
        <Testimonial />
        <News />
        <Awards /> */}
        <Footer />
    </main>
  )
}

export default page
