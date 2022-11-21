import { Animation1 } from '../Animations'
import { Frame000 } from '../frames'
import { useEffect, useState, useRef } from 'react';

export const FirsthFrame = () => {
  const [on, toggle] = useState(false);
  return (

         <div className='flex flex-col text-center  w-4/5  items-center'>
           

        <div className='animate-layerOpacity'><Animation1 /></div>

      <div className='mt-5 '>

          <svg width="7" height="84" viewBox="0 0 7 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3.5" cy="80.5" r="3.5" transform="rotate(-180 3.5 80.5)" fill="white"/>
<line x1="3.5" y1="80" x2="3.5" stroke="white"/>
          </svg>

        
      </div>
   <Frame000 />
    </div>

  )
}

export default FirsthFrame  