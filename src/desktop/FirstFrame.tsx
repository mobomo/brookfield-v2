import { Animation1 } from './Animations'


const FirstFrame = () => {
  return (
    <div className='text-white centerColumn  gap-10'>
      <div className=' '>

        <Animation1 />

      </div>
            <div className='flex justify-center'>
                        <svg width="7" height="65" viewBox="0 0 7 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="3.5" cy="62.2917" rx="3.5" ry="2.70833" transform="rotate(-180 3.5 62.2917)" fill="#F5F5F5"/>
                        <line x1="3.5" y1="61.9048" x2="3.5" y2="-7.62939e-06" stroke="#F5F5F5"/>
                        </svg>
      </div>
      <div  className='text-center px-80 antialiased font-opensans  font-medium  text-xl gap-8 centerContent py-20   '>

                  <div className='-mt-20 max-w-100 min-w-97 px-10'>

                                      We have delivered superior long-term returns by following a patient, value-oriented
                              approach to investing, growing the breadth and depth of our portfolio over the years...

                  </div>
                  <div className='max-w-9777 min-w-97'>
                                  All the while leveraging our operational expertise to improve outcomes
                                  for our business, investors and communities
                  </div>
      </div>



    </div>
  )
}

export default FirstFrame