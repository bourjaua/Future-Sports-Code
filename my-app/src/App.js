import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
        <Header />
        <Navigation />
        <Main />
        <Aside />
    </div>
  );

  
}



export default App;