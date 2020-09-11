import React from "react"
import Radium, {StyleRoot} from 'radium';
import { useInView } from 'react-intersection-observer'
import AnimationsObject from "./AnimationsObject"
import "./../Styles/App.css"


const animationsDict = AnimationsObject()


function AnimatedParagraph({children, animationName="fadeInDownBig", time="1", senseOnScreen="false"}){

    const styles = {
        animation: {
          animation: "x "+time+"s",
          animationName: Radium.keyframes(animationsDict[animationName], animationName)
        }
      }

    const [ref, inView] = useInView({
        /* Optional options */
        triggerOnce:true,
        threshold: 1.0
      })

    return(
        <StyleRoot>
            <div ref={ref} className="test" style={(senseOnScreen=="false"||inView)?styles.animation:{visibility:"hidden"}}>
                <p className="shadow-text">{children}</p>
            </div>
        </StyleRoot>
    )
}

export default AnimatedParagraph