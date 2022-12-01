import {Animation9 } from '../desktop/Animations'



const SixthFrame = () => {
  return (
    <div className='centerColumn w-fit h-fit max-w-120 py-14 text-white gap-0 mt-0'>
              <div className=''>
                              <svg width="7" height="84" viewBox="0 0 7 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#F5F5F5"/>
                              <line x1="3.5" y1="4" x2="3.5" y2="84" stroke="#F5F5F5"/>
                              </svg>
              </div>
              <div className='text-center px-2  max-w-97 flex flex-col gap-3'>
                      <div className='heading '>A proven strategy</div>
                      <div className='text-xl leading-8'>
          Our history of successfully providing public market access to Brookfield's investing expertise
                      </div>
              </div>
              <div className='centerRow p-10 gap-24 '>
                      <div className=''> <Animation9 /></div>
                      <div className='text-xl flex flex-col items-left gap-10 '>
                            <div className='leading-8'>
                                Allows investors the flexibility to invest in the businesses or sector they prefer
                            </div>

                            <div className=''>
                              All with the backing and continuity that Brookfield provides.
                            </div>
                      </div>
                </div>
                <div className='-mt-10'>
                                <svg width="7" height="84" viewBox="0 0 7 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3.5" cy="80.5" r="3.5" transform="rotate(-180 3.5 80.5)" fill="#F5F5F5"/>
                                <line x1="3.5" y1="80" x2="3.5" stroke="#F5F5F5"/>
                                </svg>
                </div>
    </div>
  )
}

export default SixthFrame