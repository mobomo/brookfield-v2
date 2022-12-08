
import { useEffect, useState, useRef, ReactNode } from 'react';
import useWindowDimensions from './hooks/getWindowDimensions';
import { useScroll, motion, useTransform, useMotionValue } from 'framer-motion'
import './index.css'
import { ScreenAnimation2 } from './animations/Screens';

import {FrameTitleSM} from './mobile'
import FirstFrameSM from './mobile/FirstFrame'
import { Frame0SM, Frame00SM  } from './mobile'
import  SecondFrameSM  from './mobile/SecondFrame'
import  ThirdFrameSM  from './mobile/ThirdFrame'
import  FourthFrameSM  from './mobile/FourthFrame'
import  FifthFrameSM  from './mobile/FifthFrame'
import  SixthFrameSM  from './mobile/SixthFrame'
import SeventhFrameSM from './mobile/SeventhFrame'

import FrameTitle from './desktop/'
import FirstFrame from './desktop/FirstFrame'
import { Frame0, Frame00  } from './desktop'
import  SecondFrame  from './desktop/SecondFrame'
import  ThirdFrame  from './desktop/ThirdFrame'
import  FourthFrame  from './desktop/FourthFrame'
import  FifthFrame  from './desktop/FifthFrame'
import  SixthFrame  from './desktop/SixthFrame'
import SeventhFrame from './desktop/SeventhFrame'


function App() {
  const {scrollY} = useScroll()

  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (width < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);


  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
  target: ref,
   offset: ["0.5 1", "1 1"],
  })

  useEffect(() => {
  return scrollY.onChange((latest) => {
    setScroll(scrollYProgress.get())
  })
  }, [])

  const OpacityAnimation = ({children, duration, initial}:{children:ReactNode, duration?:number,initial?:number}) => {
    return <motion.div
      initial={{ opacity: initial }} animate={{ opacity: 1 }} transition={{ duration: duration, ease: [0.6, 0.01, -0.05, 0.9] }}
    >
      {children}
    </motion.div>
  }

    const UpAnimation = ({children, duration=1, initial=0,distance=10}:{children:ReactNode, duration?:number,initial?:number,distance?:number}) => {
    return <motion.div
      initial={{ translateY: initial,opacity:0 }} animate={{ translateY: distance, opacity:1 }} transition={{ duration: duration, fade:0.5,  }}
    >
      {children}
    </motion.div>
    }

  const OnScrollAnimation = ({ children, duration = 1, initial = 0, distance = 10 }: { children: ReactNode, duration?: number, initial?: number, distance?: number; }) => {

const {scrollY} = useScroll()
  const [scroll, setScroll] = useState(0);

      const ref = useRef(null)
  const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["0 1", "1 1"]
  })

  useEffect(() => {
  return scrollY.onChange((latest) => {
    setScroll(scrollYProgress.get())
  })
      }, [])
    return <motion.div
      initial={{ translateY: initial, opacity: 0.2 }}
      style={{ translateY: -100 * scroll }}
      transition={{ duration: duration }}
      animate={{  opacity: scroll }}
      className="z-50 absolute"
      ref={ref}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  }

  const x = useMotionValue(0)
const input = [-200, 0, 200]
const output = [0, scroll, 0]
  const opacity = useTransform(x, input, output)
    const y = useMotionValue(100)
  const input2 = [100, 0,10]
const output2 = [0, 20*scroll*7, 0]
const translateY = useTransform(y, input2, output2)

  return (
    <div className="h-fit bg-brandblue">
     <div className="screen"  id='screen1'>

        <div className=' p-10 mb-16 ' id=''> 
          {isMobile ?
            <FrameTitleSM /> :
            <OpacityAnimation duration={5} initial={0.5}>
              <FrameTitle />
            </OpacityAnimation>}
          
        </div>
                      <div id='intro ' className='flex flex-col    gap-3 items-center '>
                           { isMobile?<Frame0SM />:<UpAnimation distance={-20} duration={2}> <Frame0 /></UpAnimation> }
          {isMobile ? <Frame00SM /> : <UpAnimation distance={-20}  duration={2}> <Frame00 /></UpAnimation>}
                       </div>
       </div> 
     
      <div className="screen h-fit overflow-visible"  id='screen2'>
            {/* City Animation + Never Change */}
        {isMobile ? <FirstFrameSM /> :  <FirstFrame />}
 
         
      </div>
      <div className=" screen h-fit z-50 overflow-visible"  id='screen3'>
        
  
        {isMobile ? 
        <SecondFrameSM /> : 
        // <OnScrollAnimation initial={ 0} duration={2}>
          <SecondFrame />
          // </OnScrollAnimation>
          }
      
      </div>
      <div className="screen h-fit overflow-visible"   id='screen4'>
        { isMobile ? <ThirdFrameSM  /> :
        // <ScreenAnimation2>
          <ThirdFrame  />
        // </ScreenAnimation2>
        }
      </div>

      <div className="screen bg-lightBlue h-fit z-10 relative"  id='screen5'>

        {isMobile ? <FourthFrameSM /> : <FourthFrame />}
        
      </div>
        <div className={`screen h-fit z-50 `}  id='screen6'>

        {isMobile ?
          <FifthFrameSM /> :  <FifthFrame /> }
       

      </div>
      <div className="screen h-fit"  id='screen7'>
        {isMobile?<SixthFrameSM />:<SixthFrame />}
      </div>  
      <div className="screen  justify-end h-fit"  id='screen8'>
        {isMobile?<SeventhFrameSM />:<SeventhFrame />}
      </div>
      
    </div>
  );
}

export default App;

// {/* /// animation wrap below */}
  //  {/* <motion.div
  //           initial={{
  //             scaleX: '100%',
  //             scaleY: 1,
  //             opacity: 0,
  //             y:'-20%',
  //           }}
  //                 style={{
  //                   scaleX: scrollYProgress,
  //                   scaleY: scrollYProgress,
  //                   opacity,
  //                   translateY,
  //                   y:'0%',
  //                 }}
  //           ref={ref}
  //           className='z-50 absolute w-full mb-20 '
  //            transition={ {delay: 5, duration: 1, ease: [0.6, 0.01, -0.05, 0.9]} }
  //         >
  //           <FifthFrame />
  //         </motion.div>} */}