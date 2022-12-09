
import { Animation2, Animation2a} from './Animations';
import React from 'react'
import {Waypoint} from 'react-waypoint';

const FourthFrame = () => {
  const [on, toggle] = React.useState(true);
  return (
    <div className='centerColumn  h-full w-full gap-0 py-24'>
      <Waypoint
        onEnter={() => toggle(false)}
      />
      <div className='centerRow gap-2 max-w-140 '>
      <div className='text-brandblue flex flex-col max-w-100 min-w-70
      justify-center text-left gap-3'>
              <div className=' heading'>Brookfield Corporation</div>
              <ul className='antialiased text-xl pl-6 list flex flex-col gap-2'>
                <li>Deploys large-scale, perpetual and flexible capital across our operating businesses</li>
                <li>Focuses on stable, predictable and growing cash flows</li>
                <li>Compounds capital over the long term</li>
                <li>Retains and reinvests the majority of its earnings</li>
                <li>Remains conservatively capitalized, with significant liquidity</li>
              </ul>
              </div>
        <div className='h-64 flex items-center'>
             {on? <Animation2 />: <Animation2a />}
        </div>
      </div>
    </div>
  )
}

export default FourthFrame