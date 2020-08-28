import React from "react"
import {Nav, Navbar} from "react-bootstrap"
import './../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//assets
import logo from './../Assets/logo.svg'

function RNavbar(props){
    const {bg, expand="lg",className, children} = props
    return (
            <Navbar bg = {bg} expand={expand} className={className}>
                <Navbar.Collapse id="brand">
                    <Navbar.Brand  href="https://www.youtube.com/channel/UCYpNpdtcXBxc_zYCAFadnOg">
                            <img src={logo} alt="Something went wrong"
                            className="d-inline-block align-top" height="40"></img>
                            Youtube
                    </Navbar.Brand>
                </Navbar.Collapse>

                <p className="RNavbarText">
                    {props.children}
                </p>
                {/*
                <img src={logo} alt="something went wrong" className="RNavbarElement"></img>
                */}
                
                

            </Navbar>
        )

}

export default RNavbar