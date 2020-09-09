import React from "react"; //,{ useEffect , useState }
import { Parallax } from "react-parallax"; //, Background
//import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"; //, Link
//import { render } from "@testing-library/react";
//import {Button} from "react-bootstrap"
//import { Navbar, Nav} from "react-bootstrap"
import { NavDropdown, Container, Jumbotron} from "react-bootstrap" //Row, Col, Button
import "./../Styles/HomePage.css";
import "./../Styles/BlogPost.css";

import './../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import custom components
import AnimatedDiv from './../Components/AnimatedDiv'
import RNavbar from './../Components/RNavbar'
import IconLink from './../Components/IconLink'
//Assets
//import logo from './../Assets/logo.svg';
import resume from "./../Assets/RESUME.pdf"
import githubIcon from "./../Assets/github_icon.png"
import youtubeIcon from "./../Assets/youtube_icon.png"
import linkedinIcon from "./../Assets/linkedin_icon.png"


//assets
import defaultParallaxImage from "./../Assets/taj_0.jpg"

const ReactMarkdown = require('react-markdown/with-html')

function BlogPostPage(props) {
    const {
        md_text="# This is Just a test",
        parallaxImage=defaultParallaxImage, 
    } = props //render navbar? or it is separate

    // Conditionally render the navbar
    //console.log(!isEmptyObject(blogPost)?("THE POST"+ blogPost.substring(0,10) ):"NOTHIN")

    return (
        <>
            <Parallax
                blur={0}
                bgImage={parallaxImage}
                bgImageAlt="Parallax Image"
                strength={600}
                
            >
                <RNavbar className="RNavbarTop" expand="lg" title="Richard Hausman" sticky="top">
                    <Container>
                        <NavDropdown title="Sections" id="collasible-nav-dropdown" className="dropdown"
                        renderMenuOnMount={true}
                        >
                        
                        <NavDropdown.Item href="/">Home</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={resume}>Resume</NavDropdown.Item>
                        
                        </NavDropdown>
                        {/*IconLinks: Youtube, Github, LinkedIn */}
                        <IconLink link="https://www.youtube.com/channel/UCYpNpdtcXBxc_zYCAFadnOg" image={youtubeIcon} />
                        <IconLink link="https://github.com/rhausman" image={githubIcon} />
                        <IconLink link="https://www.linkedin.com/in/richard-hausman-824035154/" image={linkedinIcon} />
                    </Container>
                </RNavbar>
                <br />
                {
                        <AnimatedDiv animationName="fadeInUpBig" >
                            <header className="App-header" style={{color:"black"}}>
                                <div style={{width:"70%"}}>
                                    <Jumbotron>
                                        <ReactMarkdown source={md_text} escapeHtml={false} />
                                    </Jumbotron>
                                </div>
                            </header>
                        </AnimatedDiv>
                    
                }

            </Parallax>
        </>
    );
  }

export default BlogPostPage