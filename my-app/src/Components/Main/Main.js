// Main.js
import React from "react";
import BecomeAMember from "../Main/BecomeAMember";
import JuniorDivision from "./JuniorDivision";
import Login from "../Main/Login";
import PastRaces from "../Main/PastRaces"; 
import UpcomingRaces from "./UpcomingRaces";
import TrainingSchedule from "./TrainingSchedule";
import ContactUs from "./ContactUs";
import Home from "./Home";
import CommunityBlog from "./CommunityBlog";




const Main = () => {
// Added blogText have a blog to display, you could use a JSON of blogs if you like

  return (
    <div className="MainSection">
        <h1>Main Section</h1>

        <ul>
            <li><Home /></li>
            <li><CommunityBlog/></li>
            <li><TrainingSchedule/></li>
            <li><UpcomingRaces /></li>
            <li><PastRaces /></li>
            <li><BecomeAMember/></li>
            <li><JuniorDivision /></li>
            <li><ContactUs /></li>
            <li><Login /></li>
        </ul>
    </div>
  );
};

export default Main;