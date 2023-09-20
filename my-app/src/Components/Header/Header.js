// Header.js
import React from "react";
import Title from "../Title";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className = "Header">
            <Link to="/Header">Header</Link>
            <div class="header">
                <Title titleText="Cycling Club" />
            </div>
        </div>
    );
   
};


export default Header;