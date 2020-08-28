import React from "react"
import { Navbar, Container} from "react-bootstrap" //Nav,
import './../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//assets
import logo from './../Assets/logo.svg'

//utils
const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

function RNavbar(props){
    const {bg, expand="lg",className, children, title} = props
    return (
            <Navbar bg = {bg} expand={expand} className={className}>
                <Navbar.Collapse id="brand" className="RNavbarBrandText">
                    <Navbar.Brand  onClick={scrollTop}>
                            <img src={logo} alt="Something went wrong"
                            className="d-inline-block align-top" height="40"></img>
                    </Navbar.Brand>{' '}
                    Richard Hausman
                </Navbar.Collapse>
                
                <Navbar.Collapse>
                    <Container>
                        <p className="RNavbarText">
                            {title}
                        </p>
                    </Container>
                </Navbar.Collapse>

                
                    <p className="RNavbarText">
                        {children}
                    </p>
                
                {/*
                <img src={logo} alt="something went wrong" className="RNavbarElement"></img>
                */}
                
                

            </Navbar>
        )

}

export default RNavbar