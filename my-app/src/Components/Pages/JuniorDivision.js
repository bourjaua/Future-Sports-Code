import React from 'react';
import Main from '../Main/Main';
import { Link } from "react-router-dom";

const JuniorDivision = () => {
    return (
        <div className="JuniorDivision">
            <Link to="/JuniorDivision">JuniorDivision</Link>    
            
            <Main Heading headingText="Junior Division"
            MainText mainText="This page contains information about the junior division"/>

        </div>
        
    );
};

export default JuniorDivision;