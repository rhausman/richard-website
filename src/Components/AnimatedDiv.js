import React from "react"
import Radium, {StyleRoot} from 'radium';
import { useInView } from 'react-intersection-observer'
import AnimationsObject from "./AnimationsObject"



const animationsDict = AnimationsObject()

function AnimatedDiv({children, animationName="fadeInDownBig", time="1", delay=1000, senseOnScreen=false, done}){
  
  
  //const [loaded, setLoaded] = useState(false);
  //const stableDone = useCallback(done, [])

  const styles = {
      animation: {
        animation: "x "+time+"s",
        animationName: Radium.keyframes(animationsDict[animationName], animationName)
      }
    }

    
    // Only for use with useSequentialRenderer hook callback

  // ------------------
  //console.log("CHILDREN: "+children)
    const [ref, inView] = useInView({
        /* Optional options */
        triggerOnce:true,
        threshold: 1.0
    })

  return(
    //loaded?(
        <StyleRoot>
            <div ref={ref} className="test" style={(!senseOnScreen||inView)?styles.animation:{visibility:"hidden"}}>
                {children}
            </div>
        </StyleRoot>
    //):<></>
    
  )
}

export default AnimatedDiv