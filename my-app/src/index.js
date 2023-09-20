import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';

ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
  <Routes>
  <Route path="/" element={<App/>} />
  <Route path="/Home" element={<Home/>}/>
  <Route path="/BecomeAMember" element={<BecomeAMember/>}/>
  <Route path="/CommunityBlog" element={<CommunityBlog/>}/>
  <Route path="/ContactUs" element={<ContactUs/>}/>
  <Route path="/JuniorDivision" element={<JuniorDivision/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/PastRaces" element={<PastRaces/>}/>
  <Route path="/TrainingSchedule" element={<TrainingSchedule/>}/>
  <Route path="/UpcomingRaces" element={<UpcomingRaces/>}/>

  </Routes>
  </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
