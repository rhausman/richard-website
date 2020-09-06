import  React, { useEffect, useState, assert } from "react";
import ReactDOM from "react-dom";
import { useInView } from 'react-intersection-observer'
import {useSequentialRenderer} from "./useSequentialRenderer"
import AnimatedDivSequential from "./AnimatedDivSequential";

/* for the child component
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoaded(true);
        const i = done();
        console.log("happening multiple times", i, new Date());
        }, delay);

        return () => clearTimeout(timer);
    }, [done]);
 */

function SequentialDivRenderContainer({children, delay=1000, senseOnScreen=false}){
    //console.log("T1 "+Array.isArray(children))
    const { items } = useSequentialRenderer(children); //children is an array


    const [ref, inView] = useInView({
        triggerOnce:true,
        threshold: 1.0
      })

   //console.log("PREPPING")

   //console.log("item list is array: "+Array.isArray(e))
//   if((!senseOnScreen||inView)){

        return (
            <>
                {items.map((animatedDiv, i) => {
                const _props = animatedDiv.props
                return (
                    <AnimatedDivSequential done={() => animatedDiv.done()} animationName={_props.animationName} delay={delay} >
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