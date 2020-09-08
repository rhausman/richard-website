import React from "react"; //,{ useEffect , useState }
import { Parallax } from "react-parallax"; //, Background
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"; //, Link
//import { render } from "@testing-library/react";
//import {Button} from "react-bootstrap"
//import { Navbar, Nav} from "react-bootstrap"
import { NavDropdown, Container, Row, Col, Jumbotron, Button} from "react-bootstrap"
import "./../Styles/HomePage.css";

import './../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import custom components
import RNavbar from './../Components/RNavbar'
import AnimatedTitle from './../Components/AnimatedTitle'
import ParallaxBar from './../Components/ParallaxBar'
import IconLink from './../Components/IconLink'
//Assets
import logo from './../Assets/logo.svg';
import resume from "./../Assets/RESUME.pdf"
import githubIcon from "./../Assets/github_icon.png"
import youtubeIcon from "./../Assets/youtube_icon.png"
import linkedinIcon from "./../Assets/linkedin_icon.png"


//assets
import defaultParallaxImage from "./../Assets/Alp.JPG"

function HomePage(props) {
    const {
        parallaxImage=defaultParallaxImage, 
        renderNavbar=true, 
        titleMessage="SCIENCE FOR HUMANITY", 
        placeHoldHeight=false,
        parallaxBarTop="40%",
        parallaxBarLeft="50%",
        senseTitleOnScreen="false", 
        children} = props //render navbar? or it is separate
    
    //const [initialized, setInitialized] = useState(false);
    //const [images, setImages] = useState([]);
    //const [layers, setLayers] = useState([]);

    // Conditionally render the navbar
    let navbar = <></>
    if(renderNavbar=="true"){
        console.log("generating navbar")
        navbar=(
            <RNavbar className="RNavbarTop" expand="lg" title="Welcome to my Website">
                Welcome to my Website
            </RNavbar>
            )
    }else{console.log("NONAV")}

    return (
        <>
            {navbar}
            <Parallax
                blur={5}
                bgImage={parallaxImage}
                bgImageAlt="Parallax Image"
                strength={600}
                renderLayer={percentage => (
                    <div style={{position:"absolute", top:parallaxBarTop, left:parallaxBarLeft}}> 
                        <ParallaxBar percentage={percentage} />
                    </div>
                )}
            >
                <RNavbar className="RNavbarTop" expand="lg" title="Richard Hausman" sticky="top">
                    <Container>
                        <NavDropdown title="Sections" id="collasible-nav-dropdown" className="dropdown"
                        renderMenuOnMount={true}
                        >
                        
                        <NavDropdown.Item href="/">Home</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={resume}>Resume</NavDropdown.Item>

                        <NavDropdown.Item href="about"><Link to="/about">About Test</Link></NavDropdown.Item>
                        
                        </NavDropdown>
                        {/*IconLinks: Youtube, Github, LinkedIn */}
                        <IconLink link="https://www.youtube.com/channel/UCYpNpdtcXBxc_zYCAFadnOg" image={youtubeIcon} />
                        <IconLink link="https://github.com/rhausman" image={githubIcon} />
                        <IconLink link="https://www.linkedin.com/in/richard-hausman-824035154/" image={linkedinIcon} />
                    </Container>
                </RNavbar>

                <div style={placeHoldHeight?{height:placeHoldHeight}:{}} >
            
                    <header className="App-header">
                        
                        <div style={{position:"absolute",top:parallaxBarTop, left:parallaxBarLeft, transform:"translate(-50%,-100%)"}}>
                            <AnimatedTitle message={titleMessage} senseOnScreen={senseTitleOnScreen} fontSize={50} />
                        </div>              
                        <br />
                        <br />
                        {children}
                    </header>
                </div>
            </Parallax>
        </>
    );
  }

export default HomePage