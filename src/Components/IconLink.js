import React from "react"
import './../Styles/App.css';

//global constant definition
const defaultIconSize= "50px"

function IconLink(props){
    const {link, image, iconSize=defaultIconSize} = props 
    return(
        <a href={link}>
            <img src={image} height={iconSize} className="linkIcon" alt="icon" />
        </a>
    )

}

export default IconLink