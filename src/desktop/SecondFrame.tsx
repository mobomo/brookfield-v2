import React from 'react'
import { Animation4 } from '../desktop/Animations'

const SecondFrame = () => {
  const [on, toggle] = React.useState(false)

  return (
    <div className='text-white  centerColumn  text-center w-fit h-fit  gap-10 '>
      <div className='text-3xl font-semibold font-playfair leading-9 max-w-100'>
        With the launch of a publicly listed, pure-play alternative asset manager, we are moving into our next phase of growth.
      </div>
      <div className='flex justify-center pr-64 '>
                    <svg width="268" height="168" viewBox="0 0 268 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="264.5" cy="3.5" r="3.5" fill="#F5F5F5"/>
                          <line x1="264.5" y1="4" x2="264.5" y2="84" stroke="#F5F5F5"/>
                          <line x1="0.5" y1="168" x2="0.5" y2="83" stroke="#F5F5F5"/>
                          <line x1="1" y1="83.5" x2="265" y2="83.5" stroke="#F5F5F5"/>
                          </svg>
      </div>
      <div className='flex  w-fit px-40 gap-2  '>

              <div className='  flex flex-col items-start pl-20 gap-3  
                                min-w-70 lg:min-w-97 lg:pl-10 xl:min-w-100 xl:pl-32'>
          
                      <div className='flex text-white text-3xl  
                                      font-mediumplus font-playfair text-left'>
                        Two distinct companies
                      </div>
          
                      <div className='text-xl max-w-98 text-left  '>
                        Each with experienced, dedicated management teams that work together to create value for investors
                      </div>
              </div>
              <div className={`  -mt-52    items-end ${on?'animate-layerOpacity':''}`}>
                 <Animation4 />
              </div>

      </div>
      <div className='ml-7  -mt-40'>
                         <svg width="554" height="139" viewBox="0 0 554 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" x2="0.5" y2="100" stroke="#F5F5F5"/>
                <line x1="270" y1="139" x2="270" y2="99" stroke="#F5F5F5"/>
                <line x1="1" y1="99.5" x2="270" y2="99.5" stroke="#F5F5F5"/>
                </svg>
      </div>
    </div>
  )
}

export default SecondFrame