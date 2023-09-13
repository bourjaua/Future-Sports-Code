// Main.js
import React, { Fragment } from "react";
import Heading from "../Heading";
import MainText from "../MainText";




const Main = () => {

// Added blogText have a blog to display, you could use a JSON of blogs if you like

  return (
    <div className="MainSection">
      <div class="main">
        <Fragment>
        <Heading/>
        <MainText/>      
        </Fragment>
      </div>
    </div>
  );
};

export default Main;