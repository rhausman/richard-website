import  React from "react";

import handleViewport from 'react-in-viewport';




const Block = (props) => {
    const { inViewport, enterCount, forwardedRef, onlyOnce, _props} = props;
    let {children, placeHolderHeight, placeHolderWidth} = _props
    console.log(enterCount)
    //if it's in the viewport AND
    const toRender = inViewport&&(!onlyOnce||enterCount<2) ? children : <div />; //placeholder
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
    <ViewportBlock _props={props} onlyOnce={onlyOnce} onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
    </div>
   )

}

export default RenderOnView

//960 1981