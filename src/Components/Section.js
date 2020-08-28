import React from "react";
import { Navbar, Container} from "react-bootstrap" //Nav,

//import custom modules
import RNavbar from "./RNavbar"

function Section({ title, id, children}) {
  return (
    <div id={id}>
      <RNavbar className="RNavbarTop" expand="lg" title={title}>
        {children}
      </RNavbar>
    </div>
  );
}

export default Section