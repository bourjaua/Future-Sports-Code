import React from 'react';
import Main from '../Main/Main';
import { Link } from "react-router-dom";

const PastRaces = () => {
    return (
        <div className="PastRaces">  
            <Link to="/PastRaces">PastRaces</Link>            
            <Main Heading headingText="Past Races"
            MainText mainText="This page contains information on the past races"/>
        </div>
    );
};

export default PastRaces;