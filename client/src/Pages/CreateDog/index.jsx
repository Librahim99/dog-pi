import { Link } from "react-router-dom"
import Create from "../../Components/Create"
import s from '../buttonHome.module.css'

export default function CreateDog(){
    return(
        <>
        <Link to="/home">
            <div className={s.home}>
            <button >⌂</button>
            </div>
            </Link>
        <Create></Create>
        </>
    )
}