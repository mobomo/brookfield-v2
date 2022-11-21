import { Animation5, Animation5a, Animation6, Animation6a, Animation7, Animation7a } from '../Animations'
import React, { ReactNode } from 'react'
import Lottie from 'react-lottie';
import animations from '../jfiles'



export const FifthFrame = () => {

  const [on, toggle] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      toggle(!on);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex justify-center w-full bg-white flex-col text-brandblue px-60 pb-20  animate-coverLayer lg:h-200'> 
          <div className='flex bg-white justify-center'>
                <div className='flex flex-col  justify-center text-left gap-1 bg-red-300 '>
                      <div className='flex  text1'>
                        Brookfield Asset Management
                      </div>
                      <div className='flex  text-base   w-9775'>
                        An asset-lite manager investing third party capital through its private funds
                      </div>
                      <div  className='flex  text-base   ml-5'>
                        <li >Manages money for Limited Partners</li>
                      </div>
                      <div  className='flex  text-base   ml-5'>
                        <li >Requires little or no [balance sheet] capital</li>
                      </div>
                      <div  className='flex  text-base   ml-5'>
                        <li >[Higher] dividend payout ratio</li>
                      </div>
                </div>
          

                <div className='-mt-0 flex justify-center items-center self-center'>
                  {on? <Animation5/> :<Animation5a />}
                </div>

      </div>
      
       { on? <Animation6/>: <Animation6a />}
    </div>
  )
}

export default FifthFrame