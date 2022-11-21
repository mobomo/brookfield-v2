import React from 'react'
import { Animation2, Animation2a } from './Animations';

const FourthFrame = () => {
    const [on, toggle] = React.useState(true);
    React.useEffect(() => {
    const timer = setTimeout(() => {
      toggle(!on);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='centerRow w-fit h-fit max-w-130 pb-28 pt-16'>
      <div className='text-brandblue flex flex-col max-w-97   
      justify-center text-left gap-3 pb-16'>
              <div className=' heading'>Brookfield Corporation</div>
              <div className='antialiased  text-2xl  font-light'>Reinvest the bulk of its earnings for a steady return with a long-term horizon in mind</div>
              <div className='antialiased text-2xl  font-light'>
                <li>Retains / Reinvests the bulk of its earnings</li></div>
              </div>
        <div className='pl-10'>
             { on? <Animation2a />:<Animation2 />}
      </div>
    </div>
  )
}

export default FourthFrame