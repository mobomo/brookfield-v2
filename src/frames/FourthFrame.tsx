import { Animation2, Animation2a } from '../Animations'
import React from 'react'

export const FourthFrame = () => {
  const [on, toggle] = React.useState(false);
  
  return (
    <div className='flex text-brandblue '>
       <div className='flex flex-col w-97  justify-center text-left gap-3'>
                  <div className='flex  text-4.75xl  font-mediumplus font-playfair'>
                    Brookfield Corporation
                  </div>
                  <div className='flex  text-base  font-semibold '>
                    Reinvest the bulk of its earnings for a steady return with a long-term horizon in mind
                  </div>
                  <div>
                    <li>Retains / Reinvests the bulk of its earnings</li>
                  </div>
        </div>

   <div className='animate-layerOpacity'> { on?<Animation2 />:<Animation2a /> }</div>
 
    </div>
  )
}

export default FourthFrame