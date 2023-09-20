
import React from 'react';
import './styles.scss';
import Header from "./Components/Header/Header";
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Pages/Home';
import TrainingSchedule from './Components/Pages/TrainingSchedule';
import BecomeAMember from './Components/Pages/BecomeAMember';
import CommunityBlog from './Components/Pages/CommunityBlog';
import JuniorDivision from './Components/Pages/JuniorDivision';
import ContactUs from './Components/Pages/ContactUs';
import UpcomingRaces from './Components/Pages/UpcomingRaces';
import Login from './Components/Pages/Login';
import PastRaces from './Components/Pages/PastRaces';
import Aside from './Components/Aside/Aside';

function App() {

  console.log(window.location)
  let thisPage
  switch (window.location.pathname) {
      case "/Home":
        default:
        thisPage = <Home />
        break

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
                      break

  }

  return (
    <div class ="body">
    <div className="App">

        <Header />
        <Navigation />
        {thisPage}
        <Aside />

    </div>
    </div>
  );

  
}



export default App;