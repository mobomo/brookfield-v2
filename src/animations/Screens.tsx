import { useEffect, useState, useRef, useLayoutEffect, createRef, ReactNode } from 'react';
import { useScroll, motion, useTransform, useMotionValue } from 'framer-motion'



export const ScreenAnimation2 = ({ children, duration = 1, initial = 0, distance = 10 }: { children: ReactNode, duration?: number, initial?: number, distance?: number; }) => {

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
    // console.log("Page scroll X: ", latest, scrollYProgress.get())
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




export const ScreenAnimation3 = ({ children, duration = 1, initial = 0, distance = 10 }: { children: ReactNode, duration?: number, initial?: number, distance?: number; }) => {

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
    // console.log("Page scroll X: ", latest, scrollYProgress.get())
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


export const ScreenAnimation4 = ({ children, duration = 1, initial = 0, distance = 10 }: { children: ReactNode, duration?: number, initial?: number, distance?: number; }) => {

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
    // console.log("Page scroll X: ", latest, scrollYProgress.get())
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

