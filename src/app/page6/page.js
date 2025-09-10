import React from 'react'
import { Poppins } from 'next/font/google'
import Home from './section/Home'
import About from './section/About'
import Services from './section/Services'
import Header from './section/Header'
import Volunteer from './section/Volunteer'
import Footer from './section/Footer'
import Donation from './section/Donation'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
})


const page = () => {
  return (
    <main className={`${poppins.className}`} >
        <Header />
        <Home />
        <About />
        <Services />
        <Volunteer />
        <Donation />
        <Footer />
    </main>
  )
}

export default page
