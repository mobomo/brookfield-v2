import React from 'react'
import { Animation6,Animation6a, Animation5,Animation5a } from '../desktop/Animations'


const FifthFrame = () => {
    const [on, toggle] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      toggle(!on);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='centerColumn w-full h-full  pb-20 pt-0 gap-0 bg-white animate-coverLayer'>
      <div className='centerRow gap-2 max-w-140 '>
        <div className='text-brandblue flex flex-col items-start gap-5 pr-0 max-w-70 min-w-70'>
                <div className='heading  min-w-9777 text-brandblue'>Brookfield Asset Management</div>
                <div className='textContentLarger'>
                  An asset-lite manager investing third party capital through its private funds
                </div>
                <div className='textContentLarger indent-6 flex flex-col gap-2 max-w-9777'> 
                  <li >Manages money for Limited Partners</li>
                  <li >Requires little or no [balance sheet] capital</li>
                  <li >Higher dividend payout ratio</li>
                </div>
        </div>
        <div className=''>
           {on? <Animation5/> :<Animation5a />}
        </div>
      </div>
      <div className=' '>
     { on? <Animation6/>: <Animation6a />}
      </div>
    </div>
  )
}

export default FifthFrame