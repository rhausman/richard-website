import  React from "react";

import handleViewport from 'react-in-viewport';




const Block = (props) => {
    const { inViewport, enterCount, forwardedRef, onlyOnce, _props} = props;
    let {children} = _props
    //console.log(enterCount)
    //if it's in the viewport AND
    let renderChildren = false
    if(inViewport) {renderChildren=true} //if it's visible, we should render
    else if(enterCount>0){
      renderChildren= onlyOnce 
      //if not visible, and has been seen before, and only want to render once,
      //then sustain the render
    }
    // if not visible and hasn't been seen before or we want to redo the animations, don't render

    const toRender = renderChildren ? children : <div />; //placeholder
    return (
      <div className="viewport-block" ref={forwardedRef}>
        { toRender }
      </div>
    );
  };

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

function RenderOnView(props){
    const {onlyOnce=false} = props

    //console.log("T1 "+Array.isArray(children))


   //console.log("PREPPING")
    
   //return <ViewportBlock _props={props} onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />

   //example below
   return (
    <div>
    <ViewportBlock _props={props} onlyOnce={onlyOnce} /> 
    </div>
    
   )
   // onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />

}

export default RenderOnView

//960 1981