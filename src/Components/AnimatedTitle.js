import React from "react"
import {fadeInDownBig} from "react-animations"
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeInDownBig: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')
    }
  }

function AnimatedHeader(){
    return(
        <StyleRoot>
            <div className="test" style={styles.fadeInDownBig}>
                <h2>SCIENCE FOR HUMANITY</h2>
            </div>
        </StyleRoot>
    )
}

export default AnimatedHeader