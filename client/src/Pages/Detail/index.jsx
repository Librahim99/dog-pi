import { Link } from "react-router-dom";
import Details from "../../Components/Details";
import s from '../buttonHome.module.css'

export default function Detail(){
    return(
        <>
        <Link to="/home">
            <div className={s.home}>
            <button >⌂</button>
            </div>
            </Link>
        <Details></Details>
</>
    )
}