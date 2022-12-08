import { Animation1 } from './Animations'
import { useEffect, useRef, useState } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'


const FirstFrame = () => {
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
        // y:'15%',
      }}
      style={{
        opacity: scrollYProgress,
        translateY:-200*scroll
      }}
      ref={ref}
      exit={{ opacity: 0 }}
          
      className='text-white centerColumn  gap-10 z-40 '
    >
      <div className=' '>
        {/* City Animation */}
        <Animation1 />
        
        <div className="flex place-content-around gap-3 mt-10 text-center uppercase">
          <div>Renewable Power<br></br>& Transition</div>
          <div>Infrastructure</div>
          <div>Private Equity</div>
          <div>Real Estate</div>
          <div>Credit</div>
          <div>Insurance</div>
        </div>
      </div>
            <div className='flex justify-center'>
                        <svg width="7" height="65" viewBox="0 0 7 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="3.5" cy="62.2917" rx="3.5" ry="2.70833" transform="rotate(-180 3.5 62.2917)" fill="#F5F5F5"/>
                        <line x1="3.5" y1="61.9048" x2="3.5" y2="-7.62939e-06" stroke="#F5F5F5"/>
                        </svg>
      </div>
      <div  className='px-80 antialiased font-opensans  font-medium  text-xl gap-8 centerContent py-20   '>

      <div className='flex flex-col gap-3 -mt-20 max-w-110'>
        <div className='heading'>But first, what will never change:</div>
        <ul className='list pl-6 text-xl flex flex-col gap-2'>
          <li>Our focus on delivering strong performance across market cycles</li>
          <li>Our mission to create long-term value in our businesses and communities around the world</li>
          <li>Bringing our global reach, large-scale capital and operational expertise to bear in everything we do</li>
        </ul>
      </div>
    </div>



    </motion.div>
  )
}

export default FirstFrame