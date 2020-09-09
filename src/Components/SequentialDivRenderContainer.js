import  React from "react";
//import ReactDOM from "react-dom";
//import { useInView } from 'react-intersection-observer'
import {useSequentialRenderer} from "./useSequentialRenderer"
import AnimatedDivSequential from "./AnimatedDivSequential";

function SequentialDivRenderContainer({children, delay=1000, senseOnScreen=false}){
    //console.log("T1 "+Array.isArray(children))
    const { items } = useSequentialRenderer(children); //children is an array

        return (
            <>
                {items.map((animatedDiv, i) => {
                const _props = animatedDiv.props
                return (
                    <AnimatedDivSequential done={() => animatedDiv.done()} 
                        animationName={_props.animationName} 
                        delay={delay} 
                        key={i} 
                        time={_props.time}>
                        {/* Display the animated paragraph with its message */}
                        {_props.children} 
                    </AnimatedDivSequential>
                );
                })}
            </>
        );
//   } else return <></>
}

export default SequentialDivRenderContainer