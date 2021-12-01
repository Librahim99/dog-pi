import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {fetchDogs} from '../Store/Actions'
import Dog from './Dog'

export default function Dogs(){
    let dogs = useSelector((state) => (state.dogs))
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDogs())
    }, []);
    return(
        <><div>
            {dogs.map((dog) =>{
            return <Dog name={dog.name} image={dog.image}></Dog>
        })}
        </div>
        </>
    )
}