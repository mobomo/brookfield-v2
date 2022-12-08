
import { Animation5, Animation5a } from '../desktop/Animations'
import React from 'react'
import {Waypoint} from 'react-waypoint'

const FifthFrame = () => {
  const [on, toggle] = React.useState(true);
  return (
    <div className={`centerColumn  h-full w-full pt-0 gap-0 bg-white`} >
      <Waypoint
        onEnter={() => toggle(false)}
        bottomOffset='20%'
      />
      <div className='centerRow gap-2 max-w-140 '>
        <div className='text-brandblue flex flex-col items-start gap-5 pr-0 max-w-100 min-w-70 '>
                <div className='heading min-w-100 text-brandblue'>Brookfield Asset Management</div>
                <ul className='text-xl pl-6 flex flex-col gap-2 max-w-100 list'> 
                  <li>Offers alternative investment strategies across the risk-return spectrum</li>
                  <li>Provides innovative investment solutions to over 2,000 clients</li>
                  <li>Requires little or no balance-sheet capital</li>
                  <li>Provides shareholders with a higher dividend payout ratio</li>
                </ul>
        </div>
        <div className=''>
       {  on? <Animation5  />:<Animation5a  />}
        </div>
      </div>
      {/* <div className=' -ml-20'>
   { on? <Animation6 />: <Animation6a />}
      </div> */}

    </div>
  )
}

export default FifthFrame