import  React, { useEffect, useState, assert } from "react";
import ReactDOM from "react-dom";
import Radium, {StyleRoot} from 'radium';
import { useInView } from 'react-intersection-observer'
import handleViewport from 'react-in-viewport';
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
/*
let Block = (props) => {
    console.log(props)
    let {inViewport, _props} = props
    let {children} = _props
    console.log(_props)
    if(inViewport){
        console.log("RENDERING")
        return {children}
    } else return <div style={{ width: '400px', height: '300px', background: '#ff9800' }} />

}
*/
const Block = (props) => {
    const { inViewport, forwardedRef, _props} = props;
    console.log(forwardedRef)
    const toRender = inViewport ? _props.children : null;
    return (
      <div className="viewport-block" ref={forwardedRef}>
        { toRender }
      </div>
    );
  };

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

function RenderOnView(props){
    //console.log("T1 "+Array.isArray(children))



   //console.log("PREPPING")
    
   //return <ViewportBlock _props={props} onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />

   //example below
   return (
   <div>
   <ViewportBlock _props={props} onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
 </div>
   )

}

export default RenderOnView