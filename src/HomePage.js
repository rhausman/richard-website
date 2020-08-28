import React from "react"; //,{ useEffect , useState }
import { Parallax } from "react-parallax"; //, Background
//import { render } from "@testing-library/react";
//import {Button} from "react-bootstrap"
import { Navbar, Nav} from "react-bootstrap"
import "./Styles/HomePage.css";
import logo from './Assets/logo.svg';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import custom components
import RNavbar from './Components/RNavbar'
import AnimatedTitle from './Components/AnimatedTitle'

//assets
import defaultParallaxImage from "./Assets/Alp.JPG"

function HomePage(props) {
    const {parallaxImage=defaultParallaxImage, renderNavbar=true} = props //render navbar? or it is separate
    //const [initialized, setInitialized] = useState(false);
    //const [images, setImages] = useState([]);
    //const [layers, setLayers] = useState([]);

    // Conditionally render the navbar
    let navbar = <></>
    if(renderNavbar===true){
        navbar=(
            <RNavbar className="RNavbarTop" expand="lg">
                Welcome to my Website
            </RNavbar>
            )
    }

    return (
        <>
        {navbar}
        <Parallax
            blur={5}
            bgImage={parallaxImage}
            bgImageAlt="Parallax Image"
            strength={600}
            renderLayer={percentage => (
            <div>
                <div
                style={{
                    position: "absolute",
                    background: `white`,
                    left: "50%",
                    top: "46.5%",
                    borderRadius: "50%",
                    transform: "translate(-50%,-50%)",
                    width: (percentage+0.05) * 500,
                    height: (percentage+0.05) * 500,
                }}
                />
            </div>
            )}
        >
            
            <div>
        
                <header className="App-header">
                    <AnimatedTitle />

                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </header>
            </div>
        </Parallax>
        </>
    );
  }

export default HomePage