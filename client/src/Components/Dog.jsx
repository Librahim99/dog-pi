import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { dogDetail, fetchDogs } from "../store/actions";
import Details from "./Details";


export default function Dog({name, image, id}) {
    // function onClick() {
    //     console.log(foundDog)
    // }
    return (
        <div>
            <Link 
            // onClick={onClick} 
            to={`/home/detail/${id}`}><h3>{name}</h3>
            <img src={image} style={{height:'250px'}} />
            </Link>
        </div>
    )
}

