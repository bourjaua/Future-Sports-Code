// Main.js
import React from "react";
import Heading from "../Heading";
import MainText from "../MainText";
import Blog from "../Pages/Blog"


const Main = (props) => {

// Added blogText have a blog to display, you could use a JSON of blogs if you like

  return (
    
    <div className="MainSection">
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