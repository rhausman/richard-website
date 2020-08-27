import React, { useState, useEffect } from "react";
import { Parallax, Background } from "react-parallax";
import "./Styles/HomePage.css";
import logo from './Assets/logo.svg';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import custom components
import RNavbar from './Components/RNavbar'

//assets
import parallaxImage from "./Assets/Alp.JPG"

function HomePage(props) {
    const {paralaxImage} = props
    const [initialized, setInitialized] = useState(false);
    const [images, setImages] = useState([]);
    const [layers, setLayers] = useState([]);
    return (
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
                    top: "50%",
                    borderRadius: "50%",
                    transform: "translate(-50%,-50%)",
                    width: percentage * 500,
                    height: percentage * 500,
                }}
                />
            </div>
            )}
        >
        
            <div className="App">
            
            <RNavbar className="RNavbarTop" expand="lg">
                Welcome to my Website
            </RNavbar>
    
            <header className="App-header">
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
    );
  }

export default HomePage