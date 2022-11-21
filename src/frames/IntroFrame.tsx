import React from 'react'
import { Frame0, Frame00 } from '../frames'


const IntroFrame = () => {
  return (
    <>
      <div className='flex flex-col text-center justify-center items-center animate-moveLayer'>
            <Frame0 />
        </div>
        <div className='flex flex-col text-center justify-center items-center mt-14 animate-moveLayer' >
            <Frame00 />
      </div>
    </>
  )
}

export default IntroFrame