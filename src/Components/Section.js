import React from "react";
import RNavbar from "./RNavbar"

function Section({ title, subtitle, dark, id, children}) {
  return (
    <div id={id}>
      <RNavbar className="RNavbarTop" expand="lg">
        Welcome to the beginning!
      </RNavbar>
    </div>
  );
}

export default Section