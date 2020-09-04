import React, {useState, useEffect, useCallback} from "react"
import Radium, {StyleRoot} from 'radium';
import { useInView } from 'react-intersection-observer'
import AnimationsObject from "./AnimationsObject"

//my Components
import AnimatedParagraph from "./AnimatedParagraph"


const animationsDict = AnimationsObject()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function AnimatedParagraphSequential({children, animationName="fadeInDownBig", time="1", delay=1000, done}){
  
  
  const [loaded, setLoaded] = useState(false);
  const stableDone = useCallback(done, [])

  const styles = {
      animation: {
        animation: "x "+time+"s",
        animationName: Radium.keyframes(animationsDict[animationName], animationName)
      }
    }

    
    // Only for use with useSequentialRenderer hook callback


  useEffect(() => {
      //console.log("DELAYING")
      const timer = setTimeout(() => {
      setLoaded(true);
      const i= stableDone();
      }, delay);

      return () => clearTimeout(timer);
  }, [stableDone]);
  // ------------------
  //console.log("CHILDREN: "+children)

  return(
    
      //loaded?(
      //<StyleRoot>
      //    <div className="test" style={styles.animation}>
      //        {children}
      //    </div>
      //</StyleRoot>
    //):<p>loading</p>
    loaded?(
      <AnimatedParagraph animationName={animationName} time={time}>
        {children}
      </AnimatedParagraph>
    ):<></>
    
  )
}

export default AnimatedParagraphSequential