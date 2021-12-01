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
                // console.log(dog.id)
            return <Dog name={dog.name} image={dog.image} id={dog.id}></Dog>
        })}
        </div>
        </>
    )
}