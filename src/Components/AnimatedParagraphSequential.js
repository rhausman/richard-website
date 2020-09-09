import React, {useState, useEffect, useCallback} from "react"
//import Radium from 'radium'; //, {StyleRoot}
//import { useInView } from 'react-intersection-observer'
//import AnimationsObject from "./AnimationsObject"

//my Components
import AnimatedParagraph from "./AnimatedParagraph"



function AnimatedParagraphSequential({children, animationName="fadeInDownBig", time="1", delay=1000, done}){
  
  
  const [loaded, setLoaded] = useState(false);
  const stableDone = useCallback(done, [])

    
    // Only for use with useSequentialRenderer hook callback


  useEffect(() => {
      //console.log("DELAYING")
      const timer = setTimeout(() => {
      setLoaded(true);
      stableDone();
      }, delay);

      return () => clearTimeout(timer);
  }, [stableDone]);
  // ------------------
  //console.log("CHILDREN: "+children)

  return(
    
    loaded?(
      <AnimatedParagraph animationName={animationName} time={time}>
        {children}
      </AnimatedParagraph>
    ):<></>
    
  )
}

export default AnimatedParagraphSequential