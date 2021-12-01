import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {fetchDogs} from '../store/actions'
import Dog from './Dog'

export default function Dogs(){
    let dogs = useSelector((state) => state.dogs)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDogs())
    }, []);
    console.log(dogs)
    return<div>
            {dogs.map((dog) =>(
             <Dog name={dog.name} image={dog.image} id={dog.id}/>
        ))}
        </div>
}