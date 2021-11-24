import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import LandingPage from './LandingPage'
import Home from './Home';
import Detail from './Detail'
import CreateDog from './CreateDog'

function App() {
  return (
    <Router>
      <main>
    <Routes>
      <Route exact path="/" element={<LandingPage/>}/>
    <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/home/detail" element={<Detail/>}/>
      <Route exact path="/home/create" element={<CreateDog/>}/>
    </Routes>
      </main>
    </Router>
  );
}

export default App;
