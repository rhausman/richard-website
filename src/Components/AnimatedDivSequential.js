import React, {useState, useEffect, useCallback} from "react"
import Radium, {StyleRoot} from 'radium';
import { useInView } from 'react-intersection-observer'
import AnimationsObject from "./AnimationsObject"



const animationsDict = AnimationsObject()

function AnimatedDivSequential({children, animationName="fadeInDownBig", time="1", delay=1000, senseOnScreen=false, done}){
  
    const styles = {
        animation: {
            animation: "x "+time+"s",
            animationName: Radium.keyframes(animationsDict[animationName], animationName)
        }
        }
    // Sequential Rendering
    const [loaded, setLoaded] = useState(false);
    const stableDone = useCallback(done, [])
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
    const [ref, inView] = useInView({
        /* Optional options */
        triggerOnce:true,
        threshold: 1.0
    })

    //style={(!senseOnScreen||inView)?styles.animation:{visibility:"hidden"}}
    
    return loaded?(
        <StyleRoot>
            <div ref={ref} className="test" style={(!senseOnScreen||inView)?styles.animation:{visibility:"hidden"}}>
                {children}
            </div>
        </StyleRoot>
    ):<></>

}

export default AnimatedDivSequential