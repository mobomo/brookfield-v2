import React from 'react'

const useRefDimensions = (ref:any) => {
  const [dimensions, setDimensions] = React.useState({ width: 1, height: 2 })
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref
      const boundingRect = current.getBoundingClientRect()
      const { width, height } = boundingRect
      setDimensions({ width: Math.round(width), height: Math.round(height) })
    }
  }, [ref])
  return dimensions
};

export default useRefDimensions