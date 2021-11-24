import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom"


function LandingPage(){
    return(
        <Link to="/home"><button>Home</button></Link>
    )
}

export default LandingPage