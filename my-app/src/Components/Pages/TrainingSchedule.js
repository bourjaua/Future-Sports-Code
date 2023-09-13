import React from 'react';
import MainText from '../MainText';
import Heading from '../Heading'; 
import Aside from '../Aside/Aside';

const TrainingSchedule = () => {
    return (
        <div className="TrainingSchedule">
            <div class ="main">
               
               <Heading headingText="Traning Schedule" />
               <MainText mainText="This section containes information on the training schedule" />
            </div>
   
            <div class ="aside">
                <Aside/>
            </div>
        </div>
    );
};

export default TrainingSchedule;