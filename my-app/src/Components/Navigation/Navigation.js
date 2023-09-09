// Navigation.js

import React from "react";


const Navigation = () => {
    return (
        <div className="NavigationSection">
            <h1>NavSection</h1>
                <nav>
                <ul class='nav-links'>
                        <li><a class="active" href="index.html">Home</a></li>
                        <li><a href="pages/training_schedule.html">Training Schedule</a></li>
                        <li><a href="pages/upcoming_races.html">Upcoming Races</a></li>
                        <li><a href="pages/past_races.html">Past Races</a></li>
                        <li><a href="pages/become_a_member.html">Become A Member</a></li>
                        <li><a href="pages/junior_division.html">Junior Divison</a></li>
                        <li><a href="pages/contact_us.html">Contact Us</a></li>
                        <li><a href="pages/login.html">Login</a></li>
                </ul>
    </nav>
        </div>
        
    );
};

export default Navigation;