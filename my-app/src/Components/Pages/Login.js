import React from 'react';
import Main from '../Main/Main';
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="Login">
            <Link to="/Login">Login</Link>  
            
            <Main Heading headingText="Login"
            MainText mainText="This is the login page"/>

        </div>
    );
};

export default Login;