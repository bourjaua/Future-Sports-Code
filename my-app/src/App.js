import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Navigation from './Components/Navigation/Navigation';
import "./styles.css"
import Home from './Components/Pages/Home';
import TrainingSchedule from './Components/Pages/TrainingSchedule';
import BecomeAMember from './Components/Pages/BecomeAMember';
import CommunityBlog from './Components/Pages/CommunityBlog';
import JuniorDivision from './Components/Pages/JuniorDivision';
import ContactUs from './Components/Pages/ContactUs';
import UpcomingRaces from './Components/Pages/UpcomingRaces';
import Login from './Components/Pages/Login';
import PastRaces from './Components/Pages/PastRaces';

function App() {
  console.log(window.location)
  let thisPage
  switch (window.location.pathname) {
    case "/":
      thisPage = <App />
      break

      case "/Home":
        thisPage = <Home />

        case "/BecomeAMember":
          thisPage = <BecomeAMember />
          break

          case "/CommunityBlog":
            thisPage = <CommunityBlog />
            break

            case "/ContactUs":
              thisPage = <ContactUs />
              break

              case "/JuniorDivision":
                thisPage = <JuniorDivision />
                break

                case "/Login":
                  thisPage = <Login />
                  break

                  case "/PastRaces":
                  thisPage = <PastRaces />
                  break

                  case "/TrainingSchedule":
                    thisPage = <TrainingSchedule />
                    break 

                    case "/UpcomingRaces":
                      thisPage = <UpcomingRaces />

    

  }
  return (
    <div className="App">
      <div className="body">
        <Header />
        <Navigation />
        {thisPage}
      </div>
    </div>
  );

  
}



export default App;