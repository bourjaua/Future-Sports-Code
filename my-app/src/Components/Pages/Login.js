import React from 'react';
import MainText from '../MainText';
import Heading from '../Heading'; 

const Login = () => {
    return (
        <div className="Login">
            <div class ="main">
               
               <Heading headingText="Become A Login" />
               <MainText mainText="This section containes information on how to login" />
            </div>
   
            <div 
                class ="aside">  
            </div>
        </div>
    );
};

export default Login;