import React from 'react';
//import {Button} from "react-bootstrap"
import { Router, Route } from "react-router-dom"; //, Link
import { Link as ScrollLink} from "react-scroll"; //Element, animateScroll as scroll 
import { ScrollPercentage } from 'react-scroll-percentage' //useScrollPercentage, 
import { createBrowserHistory as createHistory } from "history";
import { NavDropdown, Container} from "react-bootstrap"
//import custom components
import Section from './Components/Section'
import RNavbar from './Components/RNavbar'
import HomePage from './HomePage';
import IconLink from './Components/IconLink'
import AnimatedParagraph from './Components/AnimatedParagraph'
import SequentialRenderContainer from "./Components/SequentialRenderContainer"
import AnimatedDiv from "./Components/AnimatedDiv"

//assets
//import logo from './Assets/logo.svg';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import secondBgImage from "./Assets/seated_pic.JPG"
import githubIcon from "./Assets/github_icon.png"
import youtubeIcon from "./Assets/youtube_icon.png"
import linkedinIcon from "./Assets/linkedin_icon.png"
import resume from "./Assets/RESUME.pdf"

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

  //const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  //const myRef = useRef(null)
  //const executeScroll = () => scrollToRef(myRef)
  
  //const [ref, percentage] = useScrollPercentage()
  let percentageMem = 0.0

  return (
    <Router history={history}>
      
      {/*
        <ScrollPercentage
          as="div"
          onChange={(percentage, entry) => {percentageMem = scrollOnChange(autoscrollThreshold,percentage, percentageMem)}  }
        >
      */}
      <Route path="/" render={
        ()=> 
        <>
          <RNavbar className="RNavbarTop" expand="lg" title="Welcome to the Beginning!">
            <Container>
              <NavDropdown title="Sections" id="collasible-nav-dropdown" className="dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item >
                  <ScrollLink
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  >Experience</ScrollLink>
                </NavDropdown.Item>
                <NavDropdown.Item href={resume}>Resume</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              {/*IconLinks: Youtube, Github, LinkedIn */}
              <IconLink link="https://www.youtube.com/channel/UCYpNpdtcXBxc_zYCAFadnOg" image={youtubeIcon} />
              <IconLink link="https://github.com/rhausman" image={githubIcon} />
              <IconLink link="https://www.linkedin.com/in/richard-hausman-824035154/" image={linkedinIcon} />
            </Container>
          </RNavbar>

          <HomePage renderNavbar="false" senseTitleOnScreen="false">
            <SequentialRenderContainer delay={100}>
              <AnimatedParagraph animationName="fadeInLeft" >
                I am simply someone with a profound love of both science and humanity;{"\n"}
              </AnimatedParagraph>
              <AnimatedParagraph animationName="fadeInRight" >
                I want to use the technology at our disposal for the good of all people.
              </AnimatedParagraph>
              <AnimatedParagraph animationName="fadeInUp">
                  "Music can name the unnamable and communicate the unknowable"<br />
                  -Leonard bernstein"
              </AnimatedParagraph>
            </SequentialRenderContainer>
          </HomePage>
      
    
    
          <Section
          title="Experience"
          id="section2"
          />
          <HomePage renderNavbar="false" parallaxImage={secondBgImage} titleMessage="EXPERIENCE" senseTitleOnScreen="true">
            <AnimatedDiv animationName="fadeInUp" senseOnScreen={true} time={3}>
              <p> Joe mama!!!!!</p>
            </AnimatedDiv>
            <AnimatedParagraph animationName="fadeInLeft" senseOnScreen="true" >
              Yeet ya,
              yeet ya
            </AnimatedParagraph>
          </HomePage>
        </>
      }/> {/*Route path*/}
      
      {/*
      </ScrollPercentage>
      */}
    </Router>
  );
}

export default App;