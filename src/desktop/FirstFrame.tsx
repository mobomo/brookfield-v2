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
    // console.log("Page scroll 2: ", latest, scrollYProgress.get())
  })
      }, [])
  
  
  
  return (
    <motion.div
            initial={{
              //  scaleX: '100%',
              // scaleY: 1,
        opacity: 0.8,
              
              y:'75%',
            }}
                  style={{
                    // scaleX: scrollYProgress,
                    // scaleY: scrollYProgress,
                            opacity: scrollYProgress,
                            translateY:-100*scroll*7.5
                  }}
            ref={ref}
            // animate={{translateY: scroll2}}
            // className='z-50 absolute'
      exit={{ opacity: 0 }}
          
      className='text-white centerColumn  gap-10 z-40 absolute '
    >
      <div className=' '>

        <Animation1 />

      </div>
            <div className='flex justify-center'>
                        <svg width="7" height="65" viewBox="0 0 7 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="3.5" cy="62.2917" rx="3.5" ry="2.70833" transform="rotate(-180 3.5 62.2917)" fill="#F5F5F5"/>
                        <line x1="3.5" y1="61.9048" x2="3.5" y2="-7.62939e-06" stroke="#F5F5F5"/>
                        </svg>
      </div>
      <div  className='text-center px-80 antialiased font-opensans  font-medium  text-xl gap-8 centerContent py-20   '>

                  <div className='-mt-20 max-w-110 min-w-97 '>

                                      We have delivered superior long-term returns by following a patient, value-oriented
                              approach to investing, growing the breadth and depth of our portfolio over the years...

                  </div>
                  <div className='max-w-99 min-w-97'>
                                  All the while leveraging our operational expertise to improve outcomes
                                  for our business, investors and communities
                  </div>
      </div>



    </motion.div>
  )
}

export default FirstFrame