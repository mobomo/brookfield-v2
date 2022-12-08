import React from 'react'
// import { Animation4 } from '../desktop/Animations';
import {Waypoint} from 'react-waypoint'

import { useEffect, useRef, useState } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'


const ThirdFrame = () => {
  const [on, toggle] = React.useState(false)

  const {scrollY} = useScroll()
  const [scroll, setScroll] = useState(0);

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end end"]
  })

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScroll(scrollYProgress.get())
    })
  }, [])

  return (
  <motion.div
    initial={{
      opacity: 0.8,
      // y:'50px',
    }}
    style={{
      opacity: scrollYProgress,
      translateY:-100*scroll
    }}
    ref={ref}
    exit={{ opacity: 0 }}
        
    className='text-white centerColumn  gap-10 z-40 '
  >
    <div className='centerContent w-fit h-fit max-w-140'>
                                          <Waypoint
                      onLeave={() => toggle(!on)}
                      bottomOffset='-90%'
                      />
      {/* <div className='flex '> */}
        {/* <div className={`-mt-24 ${on?'animate-layerOpacity':''}`}>
          <Animation4 />
        </div> */}
        <div className='text-white pl-10  flex flex-col gap-3 min-w-70 lg:min-w-97 lg:pl-10 xl:min-w-100 '>
          <div className='font-mediumplus font-playfair pr-16 text-3xl'>
            A new way to invest: Brookfield Asset Management
          </div>
          <div className='text-xl max-w-98 '>
            A pure-play asset manager backed by Brookfield Corporation—a company with large-scale capital and a history of generating strong returns for shareholders
          </div>
        </div>
      {/* </div> */}
      <div className="flex justify-center mt-10">
        <svg width="7" height="65" viewBox="0 0 7 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="3.5" cy="62.2917" rx="3.5" ry="2.70833" transform="rotate(-180 3.5 62.2917)" fill="#F5F5F5"></ellipse>
          <line x1="3.5" y1="61.9048" x2="3.5" y2="-7.62939e-06" stroke="#F5F5F5"></line>
        </svg>
      </div>
      {/* <div className=''>
         <svg width="333" height="168" viewBox="0 0 333 168" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3.5" cy="164.5" r="3.5" transform="rotate(-180 3.5 164.5)" fill="#F5F5F5"/>
<line x1="3.5" y1="164" x2="3.5" y2="84" stroke="#F5F5F5"/>
<line x1="332.5" y1="85" x2="332.5" stroke="#F5F5F5"/>
<line x1="3" y1="84.5" x2="333" y2="84.5" stroke="#F5F5F5"/>
</svg>
      </div> */}
    </div>
    </motion.div>
  )
}

export default ThirdFrame