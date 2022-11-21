import { Animation1 } from '../Animations'
import { Frame000 } from './'
import { useEffect, useState, useRef } from 'react';

export const FirsthFrame = () => {
  const [on, toggle] = useState(false);
  return (

     <div className='flex flex-col text-center   items-center '>
                  <div className='animate-layerOpacity w-full '>
                    <Animation1 />
                  </div>

                  <div className='mt-5 '>
                        <svg width="7" height="65" viewBox="0 0 7 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="3.5" cy="62.2917" rx="3.5" ry="2.70833" transform="rotate(-180 3.5 62.2917)" fill="#F5F5F5"/>
                        <line x1="3.5" y1="61.9048" x2="3.5" y2="-7.62939e-06" stroke="#F5F5F5"/>
                        </svg>

                  </div>
                  <div className='
                  flex flex-col text-center justify-center items-center mt-3 text-white text-xs  font-normal gap-4 antialiased tracking-tighter'>
                  <div className=' p-4'>
                    We have delivered superior long-term returns by following a patient, value-oriented
                    approach to investing, growing the breadth and depth of our portfolio over the years...
                  </div>
                  <div>
                      <div className='px-4'>
                        All the while leveraging our operational expertise to improve outcomes
                        for our business, investors and communities
                      </div>
                  </div>
             </div>
            
      </div>

  )
}

export default FirsthFrame  