import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { dogDetail, fetchDogs } from "../Store/Actions";



export default function Details() {
    const {dogId} = useParams();
    let dogs = useSelector((state) => state.dogs)
    const foundDog = dogs.find((dog) => dog.id == dogId)
    return (
        <>
        <div>
        <h1>{foundDog.name}</h1>
        <button>eliminar</button>
        <button>favoritos</button>
        </div>
        <img src={foundDog.image} alt={foundDog.name} style={{height:'400px'}}/>
        <h3>Min weight: {foundDog.min_weight} kg.</h3>
        <h3>Max weight: {foundDog.max_weight} kg.</h3>
        <h3>Min height: {foundDog.min_height} cm.</h3>
        <h3>Max height: {foundDog.max_height} cm.</h3>
        <h3>Life span: {foundDog.life_span}.</h3>
        <h3>Temperament: {foundDog.temperament}
            {/* {foundDog.temperament.split(", ").map((t)=> {
            return <Link to={`/home/temperament/${t}`}>{<button>{t}</button>}</Link>
            })} */}
        </h3>
        </>
    )
}

