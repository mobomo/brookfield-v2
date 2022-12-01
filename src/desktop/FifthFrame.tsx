
import { Animation6, Animation6a,Animation5, Animation5a } from '../desktop/Animations'
import React from 'react'
import {Waypoint} from 'react-waypoint'

const FifthFrame = () => {
  const [on, toggle] = React.useState(true);
  return (
    <div className={`centerColumn  h-full w-full pb-20 pt-0 gap-0 bg-white`} >
      <Waypoint
        onEnter={() => toggle(false)}
        bottomOffset='85%'
      />
      <div className='centerRow gap-2 max-w-140 '>
        <div className='text-brandblue flex flex-col items-start gap-5 pr-0 max-w-100 min-w-70 '>
                <div className='heading min-w-100 text-brandblue'>Brookfield Asset Management</div>
                <div className='text-xl  max-w-100 min-w-99'>
                  An asset-lite manager investing third party capital through its private funds
                </div>
                <ul className='text-xl pl-12 flex flex-col gap-2 max-w-100 list'> 
                  <li >Manages money for Limited Partners</li>
                  <li >Requires little or no [balance sheet] capital</li>
                  <li >Higher dividend payout ratio</li>
                </ul>
        </div>
        <div className=''>
       {  on? <Animation5  />:<Animation5a  />}
        </div>
      </div>
      <div className=' -ml-20'>
   { on? <Animation6 />: <Animation6a />}
      </div>

    </div>
  )
}

export default FifthFrame