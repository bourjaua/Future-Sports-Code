import React from 'react';
import Main from '../Main/Main';
import { Link } from "react-router-dom";

const UpcomingRaces = () => {
    return (

        <div className="UpcomingRaces">
            <Link to="/UpcomingRaces">UpcomingRaces</Link>               
            <Main Heading headingText="Upcoming Races"
            MainText mainText="This page contains information on the Upcoming Races"/>
        </div>

    );
};

export default UpcomingRaces;