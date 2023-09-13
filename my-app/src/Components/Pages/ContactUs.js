import React from 'react';
import { useState } from "react";
import MainText from '../MainText';
import Heading from '../Heading'; 

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
        <div className="ContactUs">
            <div class ="main">
               
               <Heading headingText="Contact us" />
               <MainText mainText="This section containes contact information" />
               </div>
   
               <div class ="aside">
               <Button>click</Button>
               </div>
            
        </div>
    );
};

export default ContactUs;