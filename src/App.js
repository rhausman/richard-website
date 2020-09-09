import React from 'react';
//import {Button} from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"; //, Link
import { Link as ScrollLink} from "react-scroll"; //Element, animateScroll as scroll 
//import { ScrollPercentage } from 'react-scroll-percentage' //useScrollPercentage, 
import { createBrowserHistory as createHistory } from "history";
import { NavDropdown, Container, Row, Col, Jumbotron, Button} from "react-bootstrap"

//import custom components
import Section from './Components/Section'
import RNavbar from './Components/RNavbar'
import HomePage from './HomePage';
import IconLink from './Components/IconLink'
import AnimatedParagraph from './Components/AnimatedParagraph'
import SequentialRenderContainer from "./Components/SequentialRenderContainer"
import AnimatedDiv from "./Components/AnimatedDiv"
import SequentialDivRenderContainer from "./Components/SequentialDivRenderContainer"
import RenderOnView from "./Components/RenderOnView"
import BlogPreviewBench from "./Components/BlogPreviewBench"
import BlogPostPage from "./Components/BlogPostPage"
import BlogPostRoutes from "./Components/BlogPostRoutes"

//assets
//import logo from './Assets/logo.svg';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import secondBgImage from "./Assets/seated_pic.JPG"
import githubIcon from "./Assets/github_icon.png"
import youtubeIcon from "./Assets/youtube_icon.png"
import linkedinIcon from "./Assets/linkedin_icon.png"
import resume from "./Assets/RESUME.pdf"
//pics for experience section
import rockefeller_img from "./Assets/Steller_Lab/IMG_0185.jpg"
import stonybrook_img from "./Assets/Rolemage/IMG_6733.jpg"
import notco_img from "./Assets/NotCo/thenotcompany.png"

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
  console.log("UPDATED VERSION")
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
      <Switch>
        <Route exact path="/" render={
          ()=> 
          <>
            <RNavbar className="RNavbarTop" expand="lg" title="Richard Hausman" sticky="top">
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
                    offset={-100}
                    duration={500}
                    >Experience</ScrollLink>
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item href="#action/3.3">
                    <ScrollLink
                      activeClass="active"
                      to="section3"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Blog Posts
                    </ScrollLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={resume}>Resume</NavDropdown.Item>
                </NavDropdown>
                {/*IconLinks: Youtube, Github, LinkedIn */}
                <IconLink link="https://www.youtube.com/channel/UCYpNpdtcXBxc_zYCAFadnOg" image={youtubeIcon} />
                <IconLink link="https://github.com/rhausman" image={githubIcon} />
                <IconLink link="https://www.linkedin.com/in/richard-hausman-824035154/" image={linkedinIcon} />
              </Container>
            </RNavbar>

            <HomePage renderNavbar="false" senseTitleOnScreen="false">
              <SequentialRenderContainer delay={100}>
                <AnimatedParagraph animationName="fadeInLeft" key={0}>
                  Please get in touch at hausman.richard@gmail.com; I would love to meet you!{"\n"}
                </AnimatedParagraph>
                <AnimatedParagraph animationName="fadeInRight" key={1}>
                  I want to use the technology at our disposal for the good of all people
                   and to accelerate science.
                </AnimatedParagraph>
                <AnimatedParagraph animationName="fadeInUp" key={2}>
                    "Music can name the unnamable and communicate the unknowable"<br />
                    -Leonard bernstein"
                </AnimatedParagraph>
              </SequentialRenderContainer>
            </HomePage>
        
      
      
            <Section
            title="Experience"
            id="section2"
            />
            <HomePage 
              renderNavbar="false" parallaxImage={secondBgImage} titleMessage="EXPERIENCE" senseTitleOnScreen="true"
              parallaxBarTop="5%" parallaxBarHelpNumber={35}
              placeHoldHeight={2200}
            >
              <div style={{paddingTop:"60px"}}>
                <RenderOnView placeHolderHeight={1981} placeHolderWidth={980}  >
                  <Container id="Experience Jumbotrons" >
                    <SequentialDivRenderContainer delay={100} senseOnScreen={true}>
                    
                      <AnimatedDiv animationName="fadeInLeft" senseOnScreen={false} time={1.0} >
                        <Jumbotron style={{background:"rgba(62, 224, 191, 0.8)"}} >
                          <Row className="justify-content-md-center">
                            <h1 style={{color:"black"}}>Steller lab - Rockefeller SSRP</h1>
                          </Row>
                          <Row>
                            <Col><img src={rockefeller_img} className="experience-image" /></Col>
                            <Col>
                              <p style={{color:"black"}} >
                                I studied protein degredadion pathways 
                                at the Steller lab at Rockefeller University. In <i>Drosophila Melanogaster</i>,
                                using a combination of <i>in vivo</i> and <i>in vitro</i> techniques including immunohistochemical microscopy,
                                protein expression in <i>E. Coli</i> and S2 cells, Western Blots, breeding lines of flies, 
                                and quantitative analysis in the context of a controlled experiment.
                                <br /> 
                                <Button variant="success" 
                                  href="https://drive.google.com/file/d/0B6oDE6tEAYrUNGhjaHVnQVlveFU/view?usp=sharing">
                                  Here's a poster that summarizes my project.
                                </Button>
                                
                              </p>
                            </Col>
                          </Row>
                          
                        </Jumbotron>
                      </AnimatedDiv>
                      <AnimatedDiv animationName="fadeInRight" senseOnScreen={false} time={1.0} >
                        <Jumbotron style={{background:"rgba(62, 224, 191, 0.8)"}}>
                          <Row className="justify-content-md-center">
                            <h1 style={{color:"black"}}>Rolemage lab - Simons SSRP</h1>
                          </Row>
                          <Row>
                            <Col>
                              <p style={{color:"black"}} >
                                I studied the formation of fear memories in mouse 
                                at the "Rolemage" lab at Stony Brook University as part of the Simons Foundation's Science 
                                Research Program<br /> 
                                <br />
                                <Button variant="primary" 
                                  href="https://www.pharm.stonybrook.edu/faculty/t/talmage">
                                  Learn more about the work of Dr. Role and Dr. Talmage.
                                </Button>
                                <br /> <br />
                                <Button variant="success" 
                                  href="https://www.linkedin.com/in/richard-hausman-824035154/">
                                  Learn more about the specific project that I completed.
                                </Button>
                                
                                <br />
                                <br />
                                The world of memory formation, storage, and recall is absolutely fascinating.
                              </p>
                            </Col>
                            <Col><img src={stonybrook_img} className="experience-image" /></Col>
                          </Row>
                          
                        </Jumbotron>
                      </AnimatedDiv>
                      <AnimatedDiv animationName="fadeInDownBig" senseOnScreen={false} time={3.0} >
                        <Jumbotron style={{background:"rgba(62, 224, 191, 0.8)"}}>
                          <Row className="justify-content-md-center">
                            <h1 style={{color:"black"}}>The Not Company</h1>
                          </Row>
                          <Row className="justify-content-md-center">
                            
                              <p style={{color:"black"}} >
                                I worked with a team to replace meat and dairy-<b>deliciously</b>-using Machine Learning
                                at <b>The Not Company.</b> Data curation, feature engineering, training and deploying models (on Kubeflow),
                                working interdepartmentally to iterate on the models, and more. <br/>
                              </p>
                          </Row>
                          <Row className="justify-content-md-center">
                            <Button variant="success" 
                                  href="https://www.notco.com">
                                  Click Here to learn More
                                </Button>
                          </Row>
                          <br />
                          <Row className="justify-content-md-center">
                            
                            
                              <img src={notco_img} className="experience-image" />
                          </Row>
                          
                        </Jumbotron>
                        
                      </AnimatedDiv>
                    </SequentialDivRenderContainer>
                  </Container>
                </RenderOnView>
              </div>
            </HomePage>

            <Section
              title="Latest Posts"
              id="section3"
            />

            <BlogPreviewBench path="./" >

            </BlogPreviewBench>
          </>
        }/> {/*Route path*/}
        <BlogPostRoutes />

        
        {/*
        </ScrollPercentage>
        */}
      </Switch>
    </Router>
  );
}

export default App;