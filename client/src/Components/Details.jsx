import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { dogDetail, fetchDogs } from "../store/actions";



export default function Details() {
    const {dogId} = useParams();
    let dogs = useSelector((state) => state.dogs)
    const foundDog = dogs.find((dog) => dog.id == dogId)
    return (
        <>
        <h1>{foundDog.name}</h1>
        <img src={foundDog.image} alt={foundDog.name} style={{height:'400px'}}/>
        <h3>Heigth: {foundDog.height} cm.</h3>
        <h3>Weight: {foundDog.weight} </h3>
        <h3>Life span: {foundDog.life_span}.</h3>
        <h3>Temperament: {foundDog.temperament.split(", ").map((t)=> {
            return <Link to={`/home/temperament/${t}`}>{t} </Link>
        })}</h3>
        </>
    )
}

