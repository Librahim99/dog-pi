import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home';
import Detail from './Pages/Detail'
import CreateDog from './Pages/CreateDog'
import { Temperament } from './Pages/Temperament';

function App() {
  return (
    <Router>
      <main>
    <Routes>
      <Route exact path="/" element={<LandingPage/>}/>
    <Route exact path="/home" element={<Home/>}/>
      <Route path="/home/detail/:dogId" element={<Detail/>}/>
      <Route exact path="/home/create" element={<CreateDog/>}/>
      <Route path="/home/temperament/:dogTemperament" element={<Temperament/>}></Route>
    </Routes>
      </main>
    </Router>
  );
}

export default App;
