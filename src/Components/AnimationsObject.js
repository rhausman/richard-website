import {fadeInDownBig,fadeInDown, fadeInLeftBig, fadeInLeft,
fadeInRightBig, fadeInRight, fadeInUpBig, fadeInUp} from "react-animations"

function AnimationsObject(){
    const a= (
        {
            "fadeInDownBig":fadeInDownBig,
            "fadeInDown":fadeInDown,
            "fadeInLeftBig":fadeInLeftBig,
            "fadeInLeft":fadeInLeft,
            "fadeInRightBig":fadeInRightBig,
            "fadeInRight":fadeInRight,
            "fadeInUpBig":fadeInUpBig,
            "fadeInUp":fadeInUp
            }
    )
    return a
}   

export default AnimationsObject