
import { useEffect, useState, useRef, useLayoutEffect, createRef, ReactNode } from 'react';
import {Waypoint } from 'react-waypoint';
import useWindowDimensions from './hooks/getWindowDimensions';
// import TitleFrame from './frames/TitleFrame'
// import FirsthFrame from './frames/FirsthFrame'
// import  SecondFrame  from './frames/SecondFrame'
// import  ThirdFrame  from './frames/ThirdFrame'
// import  FourthFrame  from './frames/FourthFrame'
// import  FifthFrame  from './frames/FifthFrame'
// import  SixthFrame  from './frames/SixthFrame'
// import SeventhFrame from './frames/SeventhFrame'
import './index.css'

import {FrameTitleSM} from './mobile'
import FirstFrameSM from './mobile/FirstFrame'
import FirstFramebSM from './mobile/FirstFramebSM';
import { Frame0SM, Frame00SM  } from './mobile'
import  SecondFrameSM  from './mobile/SecondFrame'
import  ThirdFrameSM  from './mobile/ThirdFrame'
import  FourthFrameSM  from './mobile/FourthFrame'
import  FifthFrameSM  from './mobile/FifthFrame'
import  SixthFrameSM  from './mobile/SixthFrame'
import SeventhFrameSM from './mobile/SeventhFrame'

import FrameTitle from './desktop/'
import FirstFrame from './desktop/FirstFrame'
import { Frame0, Frame00  } from './desktop'
import FirstFrameB from './desktop/FirstFrameB'
import  SecondFrame  from './desktop/SecondFrame'
import  ThirdFrame  from './desktop/ThirdFrame'
import  FourthFrame  from './desktop/FourthFrame'
import  FifthFrame  from './desktop/FifthFrame'
import  SixthFrame  from './desktop/SixthFrame'
import SeventhFrame from './desktop/SeventhFrame'
// import { Frame0, Frame00 } from './frames';


function App() {
  // const [titleVisible, setTitleVisible] = useState(false);
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (width < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);
  const pinElement = () => {
    const intro = document.getElementById('intro');
    intro?.classList.add('fixed');
    intro?.classList.add('top-10');
    const title = document.getElementById('title');
    title?.remove()
    
    // !titleVisible ? title?.classList.add('hidden') : title?.classList.remove('hidden')
    // intro?.classList.add('z-50')
    // console.log('pinElement: ');
  }
  // const pinElement2 = () => {
    //   const intro = document.getElementById('intro');
    //   const anim = document.getElementById('anim');
    //   if (anim !== null) {
      //     intro?.appendChild(anim);
      //   }
      //   setTitleVisible(true);
      //   // const title = document.getElementById('title');
      //   // title?.classList.remove('text-brandblue');
      //   // intro?.classList.remove('fixed');
      //   console.log('pinElement2: ');
      // }
      
      // const unpinElement = () => {
        //   const intro = document.getElementById('intro');
        //   intro?.classList.add('relative');
        //   // setTitleVisible(true);
        //   console.log('unpinElements: ');
        //   const screen2 = document.getElementById('screen2');
        //   /// remove screen2 from document
        //   screen2?.remove();
        // }
        
        const [viewScreen1, setViewScreen1] = useState(true);
        console.log('isMobile: ', isMobile);

  return (
    <div className="h-fit">

      { viewScreen1?<div className=" screen "  id='screen1'>

        <div className='animate-layerOpacity  p-14 ' id=''>
       {  isMobile?  <FrameTitleSM />: <FrameTitle />}
        </div>

                    <Waypoint
                      onEnter={() => pinElement()}
                      bottomOffset='95%'
                      />

                      <div id='intro' className='flex flex-col    gap-3 items-center'>
                           { isMobile?<Frame0SM />:  <Frame0 />}
                            {isMobile?<Frame00SM />:  <Frame00 />}
                       </div>

                              {/* <Waypoint
                      onLeave={() => unpinElement()}
                      topOffset='-60%'
                      /> */}

       </div> : null }
     
      <div className="screen h-fit"  id='screen2'>
      
                    <Waypoint
                      onEnter={() => setViewScreen1(false)}
                      bottomOffset='80%'
                      />

        {isMobile?viewScreen1 ? <FirstFrameSM /> : <FirstFramebSM />:viewScreen1 ? <FirstFrame /> : <FirstFrameB />}
        

                            {/* <Waypoint
                      onEnter={() => unpinElement2()}
                      bottomOffset='90%'
                      /> */}
      
      </div>
      <div className=" screen h-fit"  id='screen3'>
        
  
       { isMobile?  <SecondFrameSM />:<SecondFrame />}
      
      </div>
      <div className="screen h-fit"   id='screen4'>
        { isMobile? <ThirdFrameSM  />:<ThirdFrame  />}
      
      </div>

      <div className="screen bg-lightBlue h-fit"  id='screen5'>

       {isMobile? <FourthFrameSM />: <FourthFrame />}
      </div>
      <div className="screen h-fit"  id='screen6'>
  
         {isMobile? <FifthFrameSM />: <FifthFrame />}

      </div>
      <div className="screen h-fit"  id='screen7'>
        {isMobile?<SixthFrameSM />:<SixthFrame />}
      </div>  
      <div className="screen  justify-end h-fit"  id='screen8'>
        {isMobile?<SeventhFrameSM />:<SeventhFrame />}
      </div>
      
    </div>
  );
}

export default App;
