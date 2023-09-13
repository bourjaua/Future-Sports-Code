import React from 'react';
import MainText from '../MainText';
import Heading from '../Heading'; 
import Main from '../Main/Main';
import Aside from '../Aside/Aside';

const BecomeAMember = () => {
    return (
        <div className="BecomeAMember">

            <div class ="main">
               
            <Heading headingText="Become A Member" />
            <MainText mainText="This section containes information on how to become a member" />
            </div>

            <div class ="aside">
                <Aside/>
            </div>

        </div>
    );
};

export default BecomeAMember;