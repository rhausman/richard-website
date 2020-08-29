import React from "react"
import Radium, {StyleRoot} from 'radium';
import AnimationsObject from "./AnimationsObject"

const animationsDict = AnimationsObject()

function AnimatedParagraph({children, animationName="fadeInDownBig", time="1"}){

    let styles = {
        animation: {
          animation: "x "+time+"s",
          animationName: Radium.keyframes(animationsDict[animationName], animationName)
        }
      }
    

    return(
        <StyleRoot>
            <div className="test" style={styles.animation}>
                <p>{children}</p>
            </div>
        </StyleRoot>
    )
}

export default AnimatedParagraph