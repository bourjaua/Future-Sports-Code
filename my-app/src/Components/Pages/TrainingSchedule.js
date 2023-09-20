import React from 'react';
import Main from '../Main/Main';
import { Link } from "react-router-dom";

const TrainingSchedule = () => {
    return (
        <div className="TrainingSchedule">
            <Link to="/TrainingSchedule">TrainingSchedule</Link>               
            <Main Heading headingText="Training Schedule"
            MainText mainText="This page contains information on the training schedule"/>
        </div>
    );
};

export default TrainingSchedule;