import React from 'react';
import {Button} from "react-bootstrap"
import { Router, Route } from "react-router-dom"; //, Link
import { Link as ScrollLink, Element, animateScroll as scroll } from "react-scroll";
import { useScrollPercentage, ScrollPercentage } from 'react-scroll-percentage'
import { createBrowserHistory as createHistory } from "history";
import { Navbar, Nav} from "react-bootstrap"
//import custom components
import Section from './Components/Section'
import RNavbar from './Components/RNavbar'
import HomePage from './HomePage';
import IconLink from './Components/IconLink'

//assets
//import logo from './Assets/logo.svg';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import secondBgImage from "./Assets/seated_pic.JPG"
import githubIcon from "./Assets/github_icon.png"
import youtubeIcon from "./Assets/youtube_icon.png"
import linkedinIcon from "./Assets/linkedin_icon.png"

//global constant definition

//setup
const history = createHistory();

//const homepage = <HomePage parallaxImage={parallaxImage} />
const autoscrollThreshold = 0.5
function scrollOnChange(threshold,percentage, mem){
  if(percentage>threshold && mem<threshold)
  {
    mem = percentage
    window.scrollTo({top:2000, behavior:"smooth"})
  } else if(percentage<threshold && mem>threshold){
    mem=percentage
  }

  return mem
}

function App() {
  const scrollButton = (
    <Button variant="warning">
      <ScrollLink
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        >
          Next Section
        </ScrollLink>
    </Button>
  )

  //const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  //const myRef = useRef(null)
  //const executeScroll = () => scrollToRef(myRef)
  
  const [ref, percentage] = useScrollPercentage()
  let percentageMem = 0.0

  return (
    <Router history={history}>
      
      <ScrollPercentage
        as="div"
        onChange={(percentage, entry) => {percentageMem = scrollOnChange(autoscrollThreshold,percentage, percentageMem)}  }
      >
        <Route path="/" render={
          ()=> <>
            <RNavbar className="RNavbarTop" expand="lg">
              <Button>
                <ScrollLink
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  section 2
                </ScrollLink>
              </Button>
              {scrollButton}
              Welcome to the beginning!
              {/*IconLinks: Youtube, Github, LinkedIn */}
              <IconLink link="https://www.youtube.com/channel/UCYpNpdtcXBxc_zYCAFadnOg" image={youtubeIcon} />
              <IconLink link="https://github.com/rhausman" image={githubIcon} />
              <IconLink link="https://www.linkedin.com/in/richard-hausman-824035154/" image={linkedinIcon} />
            </RNavbar>
            <HomePage renderNavbar="false" />
          </>
          } />
      
      
      <Route path="/" render={
        ()=> <>
          <Section
          title="Section 2"
          subtitle="this is section 2"
          dark={false}
          id="section2"
        />
          <HomePage renderNavbar="false" parallaxImage={secondBgImage} />
        </>
        } />
      

      </ScrollPercentage>
    </Router>
  );
}

export default App;