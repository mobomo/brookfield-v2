import {Animation3} from '../Animations'


export const SecondFrame = () => {
  return (
    // mobil:w-3/4
    <div className='flex flex-col text-center justify-center items-center  '>
     {/* mobil:text-base  mobil:w-3/7 mobil:ml-40 */}
          <div className='flex flex-col gap-3'>
              <div className='flex text-white text-3xl md:text-2xl max-w-9775 text-center font-semibold font-opensans leading-9 sm:text-xl'>
                      We believe our business has greater potential for even more growth with the creation of a new listed pure-pay alternative asset manager.
              </div>
            
              <div className='items-center  flex gap-3 w-full justify-center'>
                  <div className='mr-72 mt-10'>
                    <svg width="268" height="168" viewBox="0 0 268 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="264.5" cy="3.5" r="3.5" fill="#F5F5F5"/>
                          <line x1="264.5" y1="4" x2="264.5" y2="84" stroke="#F5F5F5"/>
                          <line x1="0.5" y1="168" x2="0.5" y2="83" stroke="#F5F5F5"/>
                          <line x1="1" y1="83.5" x2="265" y2="83.5" stroke="#F5F5F5"/>
                          </svg>
                  </div>
              </div>
          </div>

          <div className='flex w-full  justify-center gap-10 -mt-32'>
              {/* <div className='flex flex-col w-97  justify-center text-left gap-3'> */}
        <div className={'flex flex-col w-97  justify-center text-left gap-3 mb-20  md:text-xl'}>
                  <div className='flex text-white text-4.75xl  font-mediumplus font-playfair'>
                    Two entities, distinct offerings
                  </div>
                  <div className='flex text-white text-base  font-semibold '>
                    Each with day-to-day operations preserved and the focus of a dedicated management team.
                  </div>
              </div>
         
                  <Animation3 />
          
          
        
          </div>

          <div className='-mt-24  '>
                <svg width="554" height="139" viewBox="0 0 554 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" x2="0.5" y2="100" stroke="#F5F5F5"/>
                <line x1="553.5" y1="139" x2="553.5" y2="99" stroke="#F5F5F5"/>
                <line x1="1" y1="99.5" x2="554" y2="99.5" stroke="#F5F5F5"/>
                </svg>


          </div>
    </div>
  )
}

export default SecondFrame