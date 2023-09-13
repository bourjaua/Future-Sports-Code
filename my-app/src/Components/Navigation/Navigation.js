// Navigation.js

import React from "react";


const Navigation = () => {
    const path = window.location.pathname
    return (
        <div className="NavigationSection">
            
                <nav className="nav-links">
                    <ul >
                        <CustomLink href="/Home">Home</CustomLink>
                        <CustomLink href="/CommunityBlog">Community Blog</CustomLink>
                        <CustomLink href="/TrainingSchedule">Training Schedule</CustomLink>
                        <CustomLink href="/UpcomingRaces">Upcoming Races</CustomLink>
                        <CustomLink href="/PastRaces">Past Races</CustomLink>
                        <CustomLink href="/BecomeAMember">Become A Member</CustomLink>
                        <CustomLink href="/JuniorDivision">Junior Division</CustomLink>
                        <CustomLink href="/ContactUs">Contact Us</CustomLink>
                        <CustomLink href="/Login">Login</CustomLink>
                    </ul>
                </nav>
            
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