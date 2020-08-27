import React, { useState, useEffect } from "react";
//import { Parallax, Background } from "react-parallax";
//import "./Styles/HomePage.css";
import logo from './Assets/logo.svg';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import custom components
import RNavbar from './Components/RNavbar'

function HomePage() {
    const [initialized, setInitialized] = useState(false);
    const [images, setImages] = useState([]);
    const [layers, setLayers] = useState([]);
    return (
      <div className="Background-Slide">
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
      </div>
    );
  }

export default HomePage