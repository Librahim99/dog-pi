import { Link } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { dogDetail, fetchDogs } from "../store/actions";
import Details from "./Details";


export default function Dog({name, image, id}) {
    let dogs = useSelector((state) => state.dogs)
    function onClick() {
        console.log(id)
        let foundDog = dogs.find((d)=> d.id===id)
    console.log(foundDog)
    }
    return (
        <div>
            <Link onClick={onClick} 
            to={`/home/detail/${id}`}><h3>{name}</h3>
            <img src={image}  />
            </Link>
        </div>
    )
}

