import React from 'react'
import Home from './_section/Home'
import ScrollMultiAnimation from './_section/Scroll'
import TextAnimation from './_section/TextAnimation'
import Boxes3D from './_section/Boxes3D'
import Box3D2 from './_section/Box3D2'
import Flip3D from './_section/Flip3D'
import Animate3D from './_section/Animate3D'

const page = () => {
  return (
   <>
   <Home />
    <Boxes3D /> 
    <Box3D2 />
    <Animate3D /> 
    {/* <Flip3D /> */}
   {/* <TextAnimation /> */}
   {/* <ScrollMultiAnimation /> */}
   </>
  )
}

export default page
