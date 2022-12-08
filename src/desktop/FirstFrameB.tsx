import { Animation1 } from './Animations'
import { FrameTitle, Frame0, Frame00 } from '../desktop'
import { FrameTitleSM, Frame0SM, Frame00SM } from '../mobile'
import React from 'react'
import useWindowDimensions from '../hooks/getWindowDimensions'

const FirstFrame = () => {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    if (width < 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);
  
  console.log('isMobile: ', isMobile);
  return (
    <div className='text-white centerColumn  gap-10 w-fit'>
      <div className='w-full text-center flex flex-col justify-center '>
      { isMobile? <FrameTitleSM /> :<FrameTitle />}
     { isMobile?<Frame0SM />: <Frame0 />}
      { isMobile? <Frame00SM />:<Frame00 />}
         </div>
      <div className='h-fit '>

        <Animation1 />

      </div>
            <div className='flex justify-center'>
                        <svg width="7" height="65" viewBox="0 0 7 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="3.5" cy="62.2917" rx="3.5" ry="2.70833" transform="rotate(-180 3.5 62.2917)" fill="#F5F5F5"/>
                        <line x1="3.5" y1="61.9048" x2="3.5" y2="-7.62939e-06" stroke="#F5F5F5"/>
                        </svg>
      </div>
      <div  className='text-center px-80 antialiased font-opensans  font-medium  text-lg gap-8 centerContent py-20   '>

        <div className='-mt-20 w-100 '>
          But first, what will never change: 
          <ul className='text-xl'>
            <li>Our focus on delivering strong performance across market cycles</li>
            <li>Our mission to create long-term value in our businesses and communities around the world</li>
            <li>Bringing our global reach, large-scale capital and operational expertise to bear in everything we do</li>
          </ul>
        </div>
      </div>



    </div>
  )
}

export default FirstFrame