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
      <div className='text-brandblue antialiased tracking-tighter px-10 gap-3 flex flex-col mb-20'>
        <div className=' text-2xl  font-semibold font-playfair '>Brookfield Corporation</div>
        <ul className='aspect-video font-normal text-sm ml-6 list'>
          <li>Deploys large-scale, perpetual and flexible capital across our operating businesses</li>
          <li>Focuses on stable, predictable and growing cash flows</li>
          <li>Compounds capital over the long term</li>
          <li>Retains and reinvests the majority of its earnings</li>
          <li>Remains conservatively capitalized, with significant liquidity</li>
        </ul>
      </div>



    </div>
  )
}

export default FourthFrame