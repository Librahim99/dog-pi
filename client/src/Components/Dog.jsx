import { Link } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { dogDetail, fetchDogs } from "../Store/Actions";
import Details from "./Details";


export default function Dog({name, image, id}) {
    function onClick() {
        console.log(id)
        let foundDog = findDog.find((d)=> d.id===id)
    console.log(foundDog)
    
    }

    let findDog = useSelector((state) => (state.dogs))
    let dispatch =useDispatch()
    useEffect(() => {
        dispatch(fetchDogs())
    }, []);
    




    return (
        <div>
            
            <Link onClick={onClick}
            to="/home/detail"><h3>{name}</h3>
            <img src={image}  />
            </Link>
            
        </div>
    )
}

