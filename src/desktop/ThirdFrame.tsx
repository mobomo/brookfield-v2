import React from 'react'
import { Animation4 } from '../desktop/Animations';
import {Waypoint} from 'react-waypoint'


const ThirdFrame = () => {
  const [on, toggle] = React.useState(false)

  return (
    <div className='centerContent w-fit h-fit max-w-140 pb-14'>
                                          <Waypoint
                      onLeave={() => toggle(!on)}
                      bottomOffset='-90%'
                      />
      <div className='flex '>
        <div className={`-mt-24 ${on?'animate-layerOpacity':''}`}>
          <Animation4 />
        </div>
        <div className='text-white pl-10 min-w-100  flex flex-col gap-3'>
          <div className='text-4.75xl  font-mediumplus font-playfair pr-16 '>
                Another way to invest with Brookfield
          </div>
          <div className='textContent max-w-98 '>
                 Investors looking for a pure-play asset manager to invest in--one with the backing of a company with over [50] years of investing experience and a strong track record of delivering returns to shareholders           
          </div>
        </div>
      </div>
      <div className='-mt-28 -mr-64'>
         <svg width="333" height="168" viewBox="0 0 333 168" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3.5" cy="164.5" r="3.5" transform="rotate(-180 3.5 164.5)" fill="#F5F5F5"/>
<line x1="3.5" y1="164" x2="3.5" y2="84" stroke="#F5F5F5"/>
<line x1="332.5" y1="85" x2="332.5" stroke="#F5F5F5"/>
<line x1="3" y1="84.5" x2="333" y2="84.5" stroke="#F5F5F5"/>
</svg>
      </div>
    </div>
  )
}

export default ThirdFrame