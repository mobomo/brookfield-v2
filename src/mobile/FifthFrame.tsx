import {  Animation5, Animation6, Animation5a, Animation6a } from './Animations'
import {Waypoint} from 'react-waypoint'
import React, { useEffect } from 'react'

function FifthFrame() {
  const [on1, toggle1] = React.useState(true);
    const [on2, toggle2] = React.useState(true);
  useEffect(() => {
    console.log('on', on1)
    console.log('on', on2)
  }, [on1,on2])
  return (
    <div className='bg-white pb-10 gap-5 centerColumn min-w-9777 w-full '>
            <Waypoint
        onEnter={() => toggle1(false)}
        bottomOffset='20%'
      />
      <div className=''>
     {  on1? <Animation5  />:<Animation5a  />}
      </div>
      <div className='
      text-brandblue antialiased tracking-tighter  gap-3 flex flex-col px-5'>
        <div className='tracking-tighter text-2xl  font-semibold font-playfair px-4 '>
          Brookfield Asset Management
        </div>
        <div className='tracking-tighter font-normal  text-sm  px-4 max-w-9777'>
          An asset-lite manager investing third party capital through its private funds
        </div>
         <Waypoint
        onEnter={() => toggle2(false)}
        bottomOffset='40%'
      />
        <ul className='tracking-tighter font-normal  text-sm  ml-3 px-5 list'>
                  <li >Manages money for Limited Partners</li>
                  <li >Requires little or no [balance sheet] capital</li>
                  <li >Higher dividend payout ratio</li>
        </ul>
      </div>
      <div className='py-16 px-5'>

       { on2? <Animation6 />: <Animation6a />}
      </div>
    
    
    </div>
  )
}

export default FifthFrame