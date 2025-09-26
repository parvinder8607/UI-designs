import React from 'react'
import Canvas from './section/Canvas'
import ScrollAnimation from './section/ScrollAnimation'
import ScrollTextAnimation from './section/ScrollTextAnimation'
import FlipAnimation from './section/FlipAnimation'

const page = () => {
  return (
    <>
    <main>
      <Canvas />
      <ScrollAnimation />
      <ScrollTextAnimation />
      <FlipAnimation />
    </main>  
    </>
  )
}

export default page
