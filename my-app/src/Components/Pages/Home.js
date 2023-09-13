import React from 'react';
import MainText from '../MainText';
import Heading from '../Heading'; 
import Aside from '../Aside/Aside';

const Home = () => {
    return (
        <div className="Home">
            <div class ="main">
               
               <Heading headingText="Home" />
               <MainText mainText="This is the home page" />
            </div>
   
            <div class ="aside">
                <Aside/>
            </div>
        </div>
    );
};

export default Home;