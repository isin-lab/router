import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Navigation from "./components/nav"
import HomePage from "./components/Home"
import DriftPage from "./components/DriftPage"
import TimeAttackPage from "./components/TimeAttackPage"
import ForzaPage from "./components/Home"

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <div className="page">
          <Routes>        
            <Route path="/" element={<HomePage/>}/>
            <Route path="/drift" element={<DriftPage/>}/>
            <Route path="/timeattack" element={<TimeAttackPage/>}/>
            <Route path="/forza" element={<ForzaPage/>}/>  
          </Routes>
        </div>
     </div>
    </Router>  
    
  );
}

export default App;
