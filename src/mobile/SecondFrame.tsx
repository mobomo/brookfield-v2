import React from 'react'
import {  Animation4 } from './Animations'

function SecondFrame() {
  return (
    <div className='centerColumn text-white  w-fit  max-w-9777 '>
      <div className=' flex flex-col items-center '>
        <div className=' text-2xl w-full text-center p-7 tracking-tighter  max-w-9777 font-playfair'>
          With the launch of a publicly listed, pure-play alternative asset manager, we are moving into our next phase of growth.
        </div>
        <div className=''>
          <svg width="7" height="65" viewBox="0 0 7 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="3.5" cy="2.70833" rx="3.5" ry="2.70833" fill="#F5F5F5"/>
          <line x1="3.5" y1="3.09525" x2="3.5" y2="65" stroke="#F5F5F5"/>
          </svg>


        </div>
       </div>
      <div className='centerColumn place-content-between flex-col-reverse '>
                <div className='flex  flex-col  place-content-between px-8 text-center gap-3'>
                      <div className='font-playfair font-mediumplus  text-2xl'>
                        Two distinct companies
                      </div>
                      <div className='font-normal  text-sm  antialiased tracking-tighter'>
                        Each with experienced, dedicated management teams that work together to create value for investors
                      </div>
                </div>
                <div className='flex-grow-0  h-fit'>
                      <Animation4 />
                </div>
      </div>
      <div className='p-5 '>
                         <svg width="1" height="65" viewBox="0 0 1 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <line x1="0.5" y1="65" x2="0.5" stroke="#F5F5F5"/>
                         </svg>



      </div>




    </div>
  )
}

export default SecondFrame