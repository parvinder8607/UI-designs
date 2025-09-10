import { Russo_One } from 'next/font/google'
import Link from 'next/link'
import React from 'react'


const russoOne = Russo_One({
  subsets: ['latin'],
  weight: ['400'],
});

const Navbar = () => {
  return (
    <header className='w-full h-20 bg-black fixed top-0 z-50 text-white '>
        <nav className='container mx-auto h-full flex items-center justify-between'>
            <h1 className={`${russoOne.className} text-4xl font-bold`}>LOGO</h1>
            <ul className='flex items-center h-full'>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/page1'}><li>Page 1</li></Link>
                <Link href={'/page2'}><li>Page 2</li></Link>
                
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
