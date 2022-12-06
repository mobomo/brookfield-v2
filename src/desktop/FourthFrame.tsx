
import { Animation2, Animation2a} from './Animations';
import React from 'react'
import {Waypoint} from 'react-waypoint';

const FourthFrame = () => {
  const [on, toggle] = React.useState(true);
  return (
    <div className='centerRow w-fit h-fit max-w-130 pt-0'>
      <Waypoint
        onEnter={() => toggle(false)}
      />

      <div className='text-brandblue flex flex-col max-w-97 min-w-97
      justify-center text-left gap-3 pb-16 '>
              <div className=' heading'>Brookfield Corporation</div>
              <ul className='antialiased text-xl pl-6 list'>
                <li>Deploys large-scale, perpetual and flexible capital across our operating businesses</li>
                <li>Stable, predictable and growing cash flows</li>
                <li>Focuses on compounding capital over the long term</li>
                <li>Retains and reinvests the majority of its earnings</li>
                <li>Conservatively capitalized, with significant liquidity</li>
              </ul>
              </div>
        <div className='pl-10'>
             {on? <Animation2 />: <Animation2a />}
      </div>
    </div>
  )
}

export default FourthFrame