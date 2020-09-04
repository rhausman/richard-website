import React, {useState} from 'react'


function ParallaxBar({percentage}){
    const [base_percent, setBasePercent] = useState(0)
    
    const styles = {
        position: "absolute",
        background:`red`,
        opacity:percentage,
        left: "50%",
        top: "50%",
        width: (percentage-0.41) * 3000 ,
        height: (percentage+0.05) * 20,
        transform: "translate(-50%,-50%)"
    }
    console.log(percentage)

    return (
        <div style={styles} />
    )
}

export default ParallaxBar

