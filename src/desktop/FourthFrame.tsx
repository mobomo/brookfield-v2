import React from 'react'
import { Animation2, Animation2a } from './Animations';
import { Waypoint } from 'react-waypoint';

const FourthFrame = () => {
    const [on, toggle] = React.useState(true);

  return (
    <div className='centerRow w-fit h-fit max-w-130 pb-28 pt-0'>
      <Waypoint
onEnter={() => toggle(!on)}
bottomOffset='-10%'
/>
      <div className='text-brandblue flex flex-col max-w-97 min-w-97   
      justify-center text-left gap-3 pb-16 '>
              <div className=' heading'>Brookfield Corporation</div>
              <div className='antialiased  text-2xl  font-light mb-5 max-w-97  '>Reinvest the bulk of its earnings for a steady return with a long-term horizon in mind</div>
              <div className='antialiased text-2xl  font-light pl-12 '>
                <li>Retains / Reinvests the bulk of its earnings</li></div>
              </div>
        <div className='pl-10'>
             { on? <Animation2a />:<Animation2 />}
      </div>
    </div>
  )
}

export default FourthFrame