import {  Animation5, Animation5a } from './Animations'
import {Waypoint} from 'react-waypoint'
import React, { useEffect } from 'react'

function FifthFrame() {
  const [on1, toggle1] = React.useState(true);
    // const [on2, toggle2] = React.useState(true);
  useEffect(() => {
    // console.log('on', on1)
    // console.log('on', on2)
  }, [on1])
  return (
    <div className='bg-white pb-26 centerColumn min-w-9777 w-full '>
            <Waypoint
        onEnter={() => toggle1(false)}
        bottomOffset='20%'
      />
      <div className=''>
     {  on1? <Animation5  />:<Animation5a  />}
      </div>
      <div className='
      text-brandblue antialiased tracking-tighter  gap-3 flex flex-col px-10'>
        <div className='tracking-tighter text-2xl  font-semibold font-playfair '>
          Brookfield Asset Management
        </div>
        <ul className='tracking-tighter font-normal  text-sm  ml-6 list max-w-9777 '>
          <li>Offers alternative investment strategies across the risk-return spectrum</li>
          <li>Provides innovative investment solutions to over 2,000 clients</li>
          <li>Requires little or no balance-sheet capital</li>
          <li>Provides shareholders with a higher dividend payout ratio</li>
        </ul>
      </div>
      {/* <div className='py-16 px-5'>

       { on2? <Animation6 />: <Animation6a />}
      </div> */}
    
    
    </div>
  )
}

export default FifthFrame