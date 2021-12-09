import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import { addToFavorites, removeFromFavorites } from "../Store/Actions";
import s from './Details.module.css'



export default function Details() {
    const dispatch = useDispatch()
    const {dogId} = useParams();
    let favorites = useSelector((state) => state.favorites)
    let dogs = useSelector((state) => state.dogs)
    
    
    const foundDog = dogs.find((dog) => dog.id == dogId)
    let isFavorite = false
    
    if((favorites.find((f) => f.id === foundDog.id))){
        isFavorite= true
    }
    const onFavClick = function(){
        if(!isFavorite){
            isFavorite = true 
            dispatch(addToFavorites(foundDog))
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
    if(!(foundDog.image.includes("png")) && !(foundDog.image.includes("jpg"))){
        foundDog.image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F53%2Ff7%2F26%2F53f726580159614740be773b95114652.jpg&f=1&nofb=1"
    }
    
    if(foundDog !== undefined){ 
        return (
            <>
        <div className={s.DetailsDiv}>
        <div className={s.titleDetails}>
        <h1>{foundDog.name}</h1>
        <button onClick={onFavClick}>{star}</button>
        </div>
        <img src={foundDog.image} alt={foundDog.name}/>
        <div>
        <h3>Min weight: {foundDog.min_weight} kg.</h3>
        <h3>Max weight: {foundDog.max_weight} kg.</h3>
        <h3>Min height: {foundDog.min_height} cm.</h3>
        <h3>Max height: {foundDog.max_height} cm.</h3>
        <h3>Life span: {foundDog.life_span}.</h3>
        <h3>Temperament: {foundDog.temperament}</h3>
        </div>
        </div>
        </>
        )
    } else return null
}

