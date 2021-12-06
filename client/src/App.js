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
import Favorites from './Pages/Favorites/Favorites';

function App() {
  return (
    <Router>
      <main>
    <Routes>
      <Route exact path="/" element={<LandingPage/>}/>
    <Route path="/home/" element={<Home/>}/>
    <Route path="/home/favorites" element={<Favorites/>}/>
      <Route path="/home/detail/:dogId" element={<Detail/>}/>
      <Route exact path="/home/create" element={<CreateDog/>}/>
    </Routes>
      </main>
    </Router>
  );
}

export default App;
