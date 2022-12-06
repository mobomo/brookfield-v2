
import Lottie from 'react-lottie';
import animations from '../jfiles'


export const Animation1 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.loader,
             rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }
  return (
    <div className=' mt-0 '>
      <Lottie
    options={defaultOptions}
    // height={20}
    width={400}
    
  />
      </div>
    )
}

export const Animation2 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim4 ,
    }
  return <Lottie
    options={defaultOptions}
    height={300}
    width={300}
    
  />
}

export const Animation2a = () => {
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animations.anim4 ,
    }
    return  <Lottie options={defaultOptions} />
}

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
    height={300}
    width={300}
    
  />
}

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
    height={300}
    width={300}
    
  />
}
export const Animation5 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim5,
      
      }
  return <Lottie
    options={defaultOptions}
    height={300}
    width={300}
    
  />
}
export const Animation5a = () => {
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animations.anim5 ,
    }
  return <Lottie
    options={defaultOptions}
    height={300}
    width={300}
    
  />
}


export const Animation6 = () => {
    const defaultOptions1 = {
      loop: true,
      autoplay: true, 
      animationData: animations.icon1,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
    }
  const defaultOptions2 = {
      loop: true,
      autoplay: true, 
    animationData: animations.icon2,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
  }
  const defaultOptions3 = {
      loop: true,
      autoplay: true, 
    animationData: animations.icon3,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
  }
  const defaultOptions4 = {
      loop: true,
      autoplay: true, 
    animationData: animations.icon4,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
  }
  const defaultOptions5 = {
      loop: true,
      autoplay: true, 
    animationData: animations.icon5,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
    }
  return <div className='flex  flex-col w-97 px-20  gap-14'>
    <div className='flex'>
        <Lottie
    options={defaultOptions1}
    height={100}
    width={100}
    
    />
    <Lottie
      options={defaultOptions2}
      height={100}
      width={100}
    />
    <Lottie
      options={defaultOptions3}
      height={100}
      width={100}
    />
     </div>
    <div className='flex px-10'>
        <Lottie
      options={defaultOptions4}
      height={100}
      width={100}
    />
    <Lottie
      options={defaultOptions5}
      height={100}
      width={100}
    
/>
  </div>
  </div>
}

export const Animation6a = () => {
    const defaultOptions1 = {
      loop: false,
      autoplay: true, 
      animationData: animations.icon1,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
    }
  const defaultOptions2 = {
      loop: false,
      autoplay: true, 
    animationData: animations.icon2,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
  }
  const defaultOptions3 = {
      loop: false,
      autoplay: true, 
    animationData: animations.icon3,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
  }
  const defaultOptions4 = {
      loop: false,
      autoplay: true, 
    animationData: animations.icon4,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
  }
  const defaultOptions5 = {
      loop: false,
      autoplay: true, 
    animationData: animations.icon5,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
    }
  return <div className='flex  flex-col w-97 px-20  gap-14'>
    <div className='flex'>
        <Lottie
    options={defaultOptions1}
    height={100}
    width={100}
    
    />
    <Lottie
      options={defaultOptions2}
      height={100}
      width={100}
    />
    <Lottie
      options={defaultOptions3}
      height={100}
      width={100}
    />
     </div>
    <div className='flex px-10'>
        <Lottie
      options={defaultOptions4}
      height={100}
      width={100}
    />
    <Lottie
      options={defaultOptions5}
      height={100}
      width={100}
    
/>
  </div>
  </div>
}
export const Animation7 = () => {
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animations.iconRowv2 ,
    }
  return <Lottie
    options={defaultOptions}
    height={300}
    width={300}
    
  />;
};
export const Animation7a = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.iconRowv2 ,
    }
  return <Lottie
    options={defaultOptions}
    height={300}
    width={300}
    
  />;
};

export const Animation8 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.icon2 ,
    }
  return <Lottie
    options={defaultOptions}
    height={300}
    width={300}
    
  />;
};

export const Animation9 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim1 ,
    }
  return <div className='w-80  '>
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
                
              />
  </div>;
};



