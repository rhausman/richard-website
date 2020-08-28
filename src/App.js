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
          Yes
        </ScrollLink>
    </Button>
  )

  return (
    <Router history={history}>

      <Route path="/" render={
        ()=> <>
          <RNavbar className="RNavbarTop" expand="lg">
            Welcome to the beginning!
            {scrollButton}
          </RNavbar>
          <HomePage renderNavbar="false" />
        </>
        } />
      <Element name="section2" className="element">
        <Route path="/" render={
          ()=> <>
            <HomePage renderNavbar="false" />
          </>
          } />
      </Element>

      
    </Router>
  );
}

export default App;