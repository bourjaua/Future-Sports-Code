import React from 'react';
import Main from '../Main/Main';
import { Link } from "react-router-dom";


const BecomeAMember = () => {
    return (
        <div className="BecomeAMember">
            <Link to="/BecomeAMember">BecomeAMember</Link>            
            <Main Heading headingText="Become A Member"
            MainText mainText="This page contains information on how to become a member"/>
        </div>


    );
};

export default BecomeAMember;