// Navigation.js

import React from "react";


const Navigation = () => {
    const path = window.location.pathname
    return (
        <div className="NavigationSection">
            <div class="header">
                <nav>
                <ul class='nav-links'>
                    <CustomLink href="/Home">Home</CustomLink>
                    <CustomLink href="/CommunityBlog">CommunityBlog</CustomLink>
                    <CustomLink href="/TrainingSchedule">TrainingSchedule</CustomLink>
                    <CustomLink href="/UpcomingRaces">UpcomingRaces</CustomLink>
                    <CustomLink href="/PastRaces">PastRaces</CustomLink>
                    <CustomLink href="/BecomeAMember">BecomeAMember</CustomLink>
                    <CustomLink href="/JuniorDivision">JuniorDivision</CustomLink>
                    <CustomLink href="/ContactUs">ContactUs</CustomLink>
                    <CustomLink href="/Login">Login</CustomLink>



                </ul>
                </nav>
            </div>
        </div>
        
    );
};

function CustomLink({href,children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active": ""}>
            <a href={href}>{children}</a>
        </li>
    )
}

export default Navigation;