import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { dogDetail, fetchDogs } from "../store/actions";
import Details from "./Details";


export default function Dog({name, image, id, weight, temperament}) {
    // function onClick() {
    //     console.log(foundDog)
    // }
    return (
        <div>
            <h3>{name}</h3>
            <Link 
            to={`/home/detail/${id}`}>
            <img src={image} style={{height:'250px'}} />
            </Link>
            <h4>Weight: {weight}</h4>
            <h4>Temperaments: {temperament}</h4>

        </div>
    )
}

