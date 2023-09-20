import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import BecomeAMember from './Components/Pages/BecomeAMember';
import CommunityBlog from './Components/Pages/CommunityBlog';
import ContactUs from './Components/Pages/ContactUs';
import JuniorDivision from './Components/Pages/JuniorDivision';
import Login from './Components/Pages/Login';
import PastRaces from './Components/Pages/PastRaces';
import TrainingSchedule from './Components/Pages/TrainingSchedule';
import UpcomingRaces from './Components/Pages/UpcomingRaces';
import Main from './Components/Main/Main';
import Aside from './Components/Aside/Aside';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';

ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
  <Routes>
  <Route basename={process.env.public_url}></Route>
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
  <Route path="/AsideSection" element={<Aside/>}/>
  <Route path="/MainSection" element={<Main/>}/>
  <Route path="/NavigationSection" element={<Navigation/>}/>
  <Route path="/Header" element={<Header/>}/>


  </Routes>
  </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
