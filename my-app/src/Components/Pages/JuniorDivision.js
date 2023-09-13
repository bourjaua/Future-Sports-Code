import React from 'react';
import MainText from '../MainText';
import Heading from '../Heading'; 
import Aside from '../Aside/Aside';

const JuniorDivision = () => {
    return (
        <div className="JuniorDivision">
            <div class ="main">
               
               <Heading headingText="Junior Division" />
               <MainText mainText="This section containes information on the junior division" />
            </div>
   
            <div class ="aside">
                <Aside/>
            </div>
        </div>
        
    );
};

export default JuniorDivision;