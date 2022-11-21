import React, { useEffect, useState, useRef } from 'react'
import { Animation9 } from './Animations'






function FifthFrame() {
  return (
    <div className='p-10 gap-5 flex flex-col max-w-9777'>
      <div className='flex justify-center'>
                          <svg width="7" height="65" viewBox="0 0 7 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="3.5" cy="2.70833" rx="3.5" ry="2.70833" fill="#F5F5F5"/>
                          <line x1="3.5" y1="3.09525" x2="3.5" y2="65" stroke="#F5F5F5"/>
                          </svg>
      </div>
      <div className='text-white text-center '>
        <div className='font-playfair font-mediumplus  text-2xl'>A proven strategy</div>
        <div className='font-opensans font-normal  text-xs antialiased'>
          Leveraging a history of successfully providing public market access to Brookfield's investing expertise
        </div>
      </div>
      <div>

        <Animation9 />
        
      </div>
      <div className='text-white text-center flex flex-col gap-3'>
        <div className='font-opensans font-normal  text-xs antialiased'>...allowing investors the flexibility to invest in the Brookfield businesses they prefer</div>
        <div className='font-opensans font-normal  text-xs antialiased'>All with the backing of Brookfield.</div>
      </div>
      <div className='flex justify-center'>
                                  <svg width="7" height="65" viewBox="0 0 7 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="3.5" cy="62.2917" rx="3.5" ry="2.70833" transform="rotate(-180 3.5 62.2917)" fill="#F5F5F5"/>
                        <line x1="3.5" y1="61.9048" x2="3.5" y2="-7.62939e-06" stroke="#F5F5F5"/>
                        </svg>
      </div>
    
    
    </div>
  )
}

export default FifthFrame