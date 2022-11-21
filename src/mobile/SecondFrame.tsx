import React, { useEffect, useState, useRef } from 'react'
import {  Animation3 } from '../Animations'

function SecondFrame() {
  return (
    <div className='centerColumn text-white    '>
      <div className=' flex flex-col items-center '>
                <div className=' text-lg w-full text-center p-7 tracking-tighter'> 
                          We believe our business has greater potential for even more growth with the creation of a new listed pure-pay alternative asset manager.
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
                        Two entities, distinct offerings
                      </div>
                      <div className='font-playfair font-normal  text-xs  antialiased tracking-tighter'>
                        Each with day-to-day operations preserved and the focus of a dedicated management team.
                      </div>
                </div>
                <div className='flex-grow-0  h-fit'> 
                      <Animation3 />
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