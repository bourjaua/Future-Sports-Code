import React from 'react';
import Main from '../Main/Main';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home">
            <Link to="/Home">Home</Link>
            <Link to="/BecomeAMember">Home</Link>

            <Main Heading headingText="Home"
            MainText mainText="This is the home page"/>

        </div>
    );
};

export default Home;