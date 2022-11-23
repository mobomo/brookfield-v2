import React, {useEffect, useState, useRef, ReactNode} from 'react'
import { useScroll, motion, useTransform, useMotionValue } from 'framer-motion'


const OnScrollAnimation = ({
  children,
  o = true,
  tX = false,
  tY = false,
  s = false,
  init = [0, 0,0, 0],
  duration = [1, 1,1, 1],
  distance = 10,
  offset = [0, 1, 1, 1],
  animation = false,
  className='z-50 absolute',
}:{
    children: ReactNode,
    o?: boolean,
    tX?: boolean,
    tY?: boolean,
    s?: boolean,
    init?: number[],
    duration?: number[],
    distance?: number,
    offset?: number[],
    animation?: boolean,
    className?:string,
  }) => 
{
  const {scrollY} = useScroll()
  const [scroll, setScroll] = useState(0);

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: [`${offset[0]} ${offset[1]}`, `${offset[2]} ${offset[3]}`]
  })

const x = useMotionValue(0)
const input1 = [-200, 0]
const output1 = [0, distance*scroll]
const opacity = useTransform(x, input1, output1)
const y = useMotionValue(0)
const input2 = [100, 0]
const output2 = [0, distance*scroll]
const translateY = useTransform(y, input2, output2)
const translateX = useTransform(y, input2, output2)
const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 1])
const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 1])
const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 1])

  useEffect(() => {
    return scrollY.onChange((latest) => {
        setScroll(scrollYProgress.get())
    // console.log("Page scroll X: ", latest, scrollYProgress.get())
  })
      }, [])
    return <motion.div
      initial={{ translateY: init[0], opacity: init[1], scale: init[2] }}
      style={{ translateY, translateX, scaleX, scaleY, scale, opacity }}
      transition={{ duration: duration }}
      animate={{  opacity: scroll }}
      className={className}
      ref={ref}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  }

export default OnScrollAnimation