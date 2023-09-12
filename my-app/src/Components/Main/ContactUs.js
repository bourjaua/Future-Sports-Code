import React from 'react';
import { useState } from "react";

function Button() {
    const [label, setLabel] = useState("Press to stop");
     return (
       <div>
         <h1>{label}!</h1>
         <button type="button" onClick={() => setLabel("Stopped")}>Stop</button>
       </div>
     );
   }

const ContactUs = () => {
    return (
        <div className="ContactUs">
            <h3>Contact Us</h3>
            <Button>click</Button>
        </div>
    );
};

export default ContactUs;