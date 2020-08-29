import React, { useRef } from "react"
import {fadeInDownBig} from "react-animations"
import Radium, {StyleRoot} from 'radium';

import useOnScreen from "./VisibilityHook.js"

const styles = {
    fadeInDownBig: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')
    }
  }

function AnimatedHeader({message, initialVisible=false}){

    // Ref for the element that we want to detect whether on screen
    const ref = useRef();
    // Call the hook passing in ref and root margin
    // In this case it would only be considered onScreen if more ...
    // ... than 300px of element is visible.
    let onScreen = useOnScreen(ref, '-300px');
    if (onScreen){console.log("ONSCREEN")} else{console.log("OFF SCR")}

    return(
        <StyleRoot>
            <div ref={ref} className="test" style={styles.fadeInDownBig}>
                <h2>{message}</h2>
            </div>
        </StyleRoot>
    )
}

export default AnimatedHeader