import React from 'react';
import {Button} from "react-bootstrap"
import { Router, Route, Link } from "react-router-dom";
import { Link as ScrollLink, Element, animateScroll as scroll } from "react-scroll";
import { createBrowserHistory as createHistory } from "history";
//import custom components
import Section from './Components/Section'
import RNavbar from './Components/RNavbar'
import HomePage from './HomePage';

//assets
//import logo from './Assets/logo.svg';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import secondBgImage from "./Assets/seated_pic.JPG"
import githubIcon from "./Assets/github_icon.png"
import youtubeIcon from "./Assets/youtube_icon.png"

//global constant definition
const iconSize= "50px"
//setup
const history = createHistory();

//const homepage = <HomePage parallaxImage={parallaxImage} />
function App() {
  const scrollButton = (
    <Button variant="warning">
      <ScrollLink
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
          Next Section
        </ScrollLink>
    </Button>
  )
  const githubIconLink= (
      <a href="https://github.com/rhausman">
        <img src={githubIcon} height={iconSize}/>
      </a>
  )
  const youtubeIconLink= (
    <a href="https://www.youtube.com/channel/UCYpNpdtcXBxc_zYCAFadnOg">
      <img src={youtubeIcon} height={iconSize}/>
    </a>
  )

  return (
    <Router history={history}>

      <Route path="/" render={
        ()=> <>
          <RNavbar className="RNavbarTop" expand="lg">
            {scrollButton}
            Welcome to the beginning!
            {youtubeIconLink}
            {githubIconLink}
          </RNavbar>
          <HomePage renderNavbar="false" />
        </>
        } />
      <Element name="section2" className="element">
        <Route path="/" render={
          ()=> <>
            <HomePage renderNavbar="false" parallaxImage={secondBgImage} />
          </>
          } />
      </Element>

      
    </Router>
  );
}

export default App;