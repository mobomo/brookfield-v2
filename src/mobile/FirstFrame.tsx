import { Animation1 } from './Animations'
import {  useState } from 'react';

export const FirsthFrame = () => {
  const [on, toggle] = useState(false);
  return (

     <div className='flex flex-col items-center max-w-40 z-50 text-white text-sm'>
                  <div className='animate-layerOpacity'>
                    {/* City Animation */}
                    <Animation1 />
                    <div className="flex flex-col items-center gap-3 mt-10 uppercase">
                      <div>Renewable Power & Transition</div>
                      <div>Infrastructure</div>
                      <div>Private Equity</div>
                      <div>Real Estate</div>
                      <div>Credit</div>
                      <div>Insurance</div>
                    </div>
                  </div>

                  <div className='mt-5 '>
                        <svg width="7" height="65" viewBox="0 0 7 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="3.5" cy="62.2917" rx="3.5" ry="2.70833" transform="rotate(-180 3.5 62.2917)" fill="#F5F5F5"/>
                        <line x1="3.5" y1="61.9048" x2="3.5" y2="-7.62939e-06" stroke="#F5F5F5"/>
                        </svg>

                  </div>
                  {/* <div className='flex flex-col text-center justify-center items-center mt-3 text-white text-sm  font-normal gap-4 antialiased tracking-tighter'> */}
                  <div className='flex flex-col gap-3 mt-20 mb-20 max-w-110'>
                    <div className='text-2xl font-playfair'>But first, what will never change:</div>
                    <ul className='list pl-6 text-sm'>
                      <li>Our focus on delivering strong performance across market cycles</li>
                      <li>Our mission to create long-term value in our businesses and communities around the world</li>
                      <li>Bringing our global reach, large-scale capital and operational expertise to bear in everything we do</li>
                    </ul>
                  </div>
             {/* </div> */}
            
      </div>

  )
}

export default FirsthFrame  