import React, { useRef } from "react"
import {fadeInDownBig, fadeInUpBig} from "react-animations"
import Radium, {StyleRoot} from 'radium';
import { useInView } from 'react-intersection-observer'

const styles = {
    fadeInDownBig: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')
    },
    fadeInUpBig: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInUpBig, 'fadeInUpBig')
      }
  }

function AnimatedTitle({message, senseOnScreen="false", initialVisible=false}){

    const [ref, inView] = useInView({
        /* Optional options */
        triggerOnce:true,
        threshold: 1.0
      })
    

    return(
        <StyleRoot >
            <div ref={ref} className="test" style={(senseOnScreen=="false"||inView)?styles.fadeInDownBig:{visibility:"hidden"}}>
                <h2>{message}</h2>
            </div>
        </StyleRoot>
    )
}

export default AnimatedTitle