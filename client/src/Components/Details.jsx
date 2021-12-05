import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import { addToFavorites, removeFromFavorites } from "../Store/Actions";
import { useState } from "react";



export default function Details() {
    const dispatch = useDispatch()
    const {dogId} = useParams();
    let dogs = useSelector((state) => state.dogs)
    const foundDog = dogs.find((dog) => dog.id == dogId)
    let favorites = useSelector((state) => state.favorites)
    
    console.log(favorites)
    
    let isFavorite = false
    
    if((favorites.find((f) => f.id === foundDog.id))){
        isFavorite= true
    }

    const onFavClick = function(){
        if(!isFavorite){
            isFavorite = true 
            dispatch(addToFavorites(foundDog))
            // console.log(foundDog)
        }
        else {
            isFavorite = false
            dispatch(removeFromFavorites(foundDog))
        }
    }
    let star = ""

        if(isFavorite){
            star = "★"
        }
        else {
            star = "☆"
    }

    
    
    return (
        <>
        <div>
        <h1>{foundDog.name}</h1>
        <button onClick={onFavClick}>{star}</button>
        </div>
        <img src={foundDog.image} alt={foundDog.name} style={{height:'400px'}}/>
        <h3>Min weight: {foundDog.min_weight} kg.</h3>
        <h3>Max weight: {foundDog.max_weight} kg.</h3>
        <h3>Min height: {foundDog.min_height} cm.</h3>
        <h3>Max height: {foundDog.max_height} cm.</h3>
        <h3>Life span: {foundDog.life_span}.</h3>
        <h3>Temperament: {foundDog.temperament}</h3>
        </>
    )
}

