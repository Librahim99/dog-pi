import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {fetchDogs} from '../store/actions'
import Dog from './Dog'

export default function Dogs(){
    let dogs = useSelector((state) => state.filteredDogs)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDogs())
    }, []);
    if(typeof dogs !== "string"){
    return<div>
            {dogs?.map((dog) =>(
             <Dog name={dog.name} image={dog.image} id={dog.id} min_weight={dog.min_weight} max_weight={dog.max_weight} temperament={dog.temperament}/>
        ))}
        </div>
    }
    else return (
        <div>There is no dog with that name :/</div>
    )
}