import React from 'react';
import MainText from '../MainText';
import Heading from '../Heading'; 
import Aside from '../Aside/Aside';

const UpcomingRaces = () => {
    return (
        <div className="UpcomingRaces">
            <div class ="main">
               
               <Heading headingText="Upcoming Races" />
               <MainText mainText="This section containes information on all upcoming races" />
            </div>
   
            <div class ="aside">
                <Aside/>
            </div>
        </div>
    );
};

export default UpcomingRaces;