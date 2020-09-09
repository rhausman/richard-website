import React, {useState} from 'react'


function ParallaxBar({percentage, topPercent}){
    const [base_percent, setBasePercent] = useState(0)

    //console.log("PERCENT: ",toLog,": ", percentage-(parseInt(topPercent)/100) )
    //console.log("WIDTH: "+(percentage- ((parseInt(topPercent)/100 ))+0.01 ) * 3000)
    
    const styles = {
        position: "absolute",
        background:`red`,
        opacity:percentage,
        left: "50%",
        top: "50%",
        width: percentage<=0?5:(percentage- ((parseInt(topPercent)/100 ))+0.01 ) * 3000 ,
        height: percentage<=0?5:(percentage+0.05) * 20,
        transform: "translate(-50%,-50%)"
    }
    //console.log(percentage)

    return (
        <div style={styles} />
    )
}

export default ParallaxBar

