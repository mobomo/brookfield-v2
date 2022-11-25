import { Animation2, Animation2a } from './Animations'
import {Waypoint} from 'react-waypoint'
import React, { useEffect } from 'react'

function FourthFrame() {
  const [on, toggle] = React.useState(true);
    useEffect(() => {
    console.log('on', on)
  }, [on])
  return (
    <div className='centerColumn pb-0 max-w-9777'>
                  <Waypoint
        onEnter={() => toggle(false)}
        bottomOffset='30%'
      />
      <div>
             {on? <Animation2 />: <Animation2a />}
      </div>
      <div className='text-brandblue antialiased tracking-tighter px-10 gap-3 flex flex-col'>
        <div className=' text-2xl  font-semibold font-playfair '>Brookfield Corporation</div>
        <div className=' font-playfair font-normal  text-sm  '>Reinvest the bulk of its earnings for a steady return with a long-term horizon in mind</div>
        <div className='aspect-video font-playfair font-normal  text-sm  ml-3'>
          <li>Retains / Reinvests the bulk of its earnings</li></div>
      </div>
     
    
    
    </div>
  )
}

export default FourthFrame