import React from "react"
import { Navbar, Container, Nav, Col} from "react-bootstrap" //Nav,
import './../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//assets
import logo from './../Assets/logo.svg'

//utils
const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

function RNavbar(props){
    const {bg, expand="lg",className, children, title, sticky="none"} = props
    return (
            <Navbar bg = {bg} expand={expand} className={className} sticky={sticky}>
                <Container  fluid className="RNavbarBrandText">
                
                <Col>
                
                <Navbar.Brand  onClick={scrollTop} style={{cursor: "pointer"}}>
                        <img src={logo} alt="Something went wrong"
                        className="d-inline-block align-top" height="80"></img>
                        {/*<div className="RNavbarBrandText"> Richard Hausman</div> */}
                </Navbar.Brand>{' '}
                
                
                </Col>
                
                
                    <Col>
                    <Nav className="mr-auto" >
                    
                            <div className="RNavbarText">
                                <p className="text-center mt-4 mb-4">
                                {title}
                                </p>
                            </div>
                    
                    </Nav>
                    </Col>
                    <Col>
                    <Nav className="mr-auto">
                        <div className="RNavbarText">
                            {children}
                        </div>
                    </Nav>
                    </Col>
                    
                    {/*
                    <img src={logo} alt="something went wrong" className="RNavbarElement"></img>
                    */}
                    
                    
                </Container>
            </Navbar>
        )

}

export default RNavbar