import {  Animation5, Animation6 } from './Animations'



function FifthFrame() {
  return (
    <div className='bg-white pb-10 gap-5 centerColumn min-w-9777 w-full '>
      <div className=''>
        <Animation5 />
      </div>
      <div className='
      text-brandblue antialiased tracking-tighter  gap-3 flex flex-col px-5'>
        <div className='tracking-tighter text-2xl  font-semibold font-playfair px-4 '>
          Brookfield Asset Management
        </div>
        <div className='tracking-tighter font-playfair font-normal  text-sm  px-4 max-w-9777'>
          An asset-lite manager investing third party capital through its private funds
        </div>
        <div className='tracking-tighter font-playfair font-normal  text-sm  ml-3 px-5'>
                  <li >Manages money for Limited Partners</li>
                  <li >Requires little or no [balance sheet] capital</li>
                  <li >Higher dividend payout ratio</li>
        </div>
      </div>
      <div className='py-16 px-5'>

      <Animation6 />
      </div>
    
    
    </div>
  )
}

export default FifthFrame