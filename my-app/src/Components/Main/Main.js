// Main.js
import React from "react";
import Heading from "../Heading";
import MainText from "../MainText";
import { Link } from "react-router-dom";


const Main = (props) => {

// Added blogText have a blog to display, you could use a JSON of blogs if you like

  return (
    
    <div className="MainSection">
      <Link to="/MainSection">MainSection</Link>
      <main>
          <>
          
            <Heading headingText={props.headingText}/>
            <><MainText mainText={props.mainText}/></>
            
          </>
      </main>
      <main></main>
    </div>
  );
};

export default Main;