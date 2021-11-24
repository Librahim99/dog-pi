import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home';
import Detail from './Pages/Detail'
import CreateDog from './Pages/CreateDog'

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
