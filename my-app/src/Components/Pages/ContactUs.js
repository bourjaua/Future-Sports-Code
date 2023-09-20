import React from 'react';
import { useState } from "react";
import Main from '../Main/Main';
import { Link } from "react-router-dom";

function Button() {
    const [label, setLabel] = useState("Press to see contact information");
     return (
       <div>
         <h1>{label}!</h1>
         <button type="button" onClick={() => setLabel("XXXX XXXX")}>Click Me!</button>
       </div>
     );
   }

const ContactUs = () => {
    return (
        <div className="ContactUS">         
        <Link to="/ContactUS">ContactUS</Link>       
            <Main Heading headingText="Contact Us"
            MainText mainText="This page contains contact information"/>
        
   
               <aside>
               <Button>click</Button>
               </aside>
            
        </div>
    );
};

export default ContactUs;