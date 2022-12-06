
import Lottie from 'react-lottie';
import animations from '../jfiles'
import useTimer from '../hooks/getTimeUp';
import { Waypoint } from 'react-waypoint';
import React from 'react';

export const Animation1 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.loader ,
    }
  return (
    <div className=' mt-0 '>
      <Lottie options={defaultOptions} />
      </div>
    )
};

export const Animation2 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim4,
      
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        // className: { backgroundColor: 'black' }.
      }
    }
  return (<>

    <Lottie
    options={defaultOptions}
    height={500}
    width={500}
  />
  </>);
}

export const Animation2a = () => {
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animations.anim4 ,
    }
  return <Lottie
    options={defaultOptions}
    height={500}
    width={500}
    
  />;
};

export const Animation3 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim2,
       rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
          
          
    }
  return <Lottie
    options={defaultOptions}
    height={500}
    width={500}
    
  />;
};

export const Animation4 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim3,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }
    return <Lottie
    options={defaultOptions}
    height={500}
    width={500}
    
  />;
};
export const Animation5 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim5,
      
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        // className: { backgroundColor: 'black' }.
      }
    }
  return (<>
    <Lottie
    options={defaultOptions}
    height={500}
    width={500}
  />
  </>);
}
export const Animation5a = () => {
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animations.anim5 ,
    }
      return <Lottie
    options={defaultOptions}
    height={500}
    width={500}
  />;
}

export const Animation6 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.iconRow,
    }
       return <Lottie
    options={defaultOptions}
    height={200}
    width={1100}
  />;
};

export const Animation6a = () => {
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animations.iconRow,
    }

       return <Lottie
    options={defaultOptions}
    height={200}
    width={1100}
  />;
};
export const Animation7 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.iconRowv2 ,
    }
    return  <Lottie options={defaultOptions} />
};
export const Animation7a = () => {
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animations.iconRowv2 ,
    }
    return  <Lottie options={defaultOptions} />
};

export const Animation8 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.icon2 ,
    }
    return  <Lottie options={defaultOptions} />
};

export const Animation9 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim1 ,
    }
    return  <div className='w-96  '><Lottie options={defaultOptions} /></div>
};



