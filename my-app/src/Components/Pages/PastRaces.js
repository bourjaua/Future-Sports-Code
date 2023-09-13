import React from 'react';
import MainText from '../MainText';
import Heading from '../Heading'; 
import Aside from '../Aside/Aside';

const PastRaces = () => {
    return (
        <div className="PastRaces">
            <div class ="main">
               
               <Heading headingText="Past Races" />
               <MainText mainText="This section containes information on the past races" />
            </div>
   
            <div class ="aside">
                <Aside/>
            </div>
        </div>
    );
};

export default PastRaces;