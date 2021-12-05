import React from 'react'
import { Link } from "react-router-dom"
import s from "./landingPage.module.css"

function LandingPage(){
    return(
        <div className={s.landingPage}>
            <div className={s.divButton}>
            <Link to="/home"><button className={s.landingPageButton}>HOME</button></Link>
            </div>
            <h5 className={s.by}>by Lucas Ibrahim</h5>
        </div>
    )
}

export default LandingPage