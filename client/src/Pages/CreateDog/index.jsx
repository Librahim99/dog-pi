import { Link } from "react-router-dom"
import Create from "../../Components/Create"


export default function CreateDog(){
    return(
        <>
        <Link to="/home/1"><button>Home</button></Link>
        <Create></Create>
        </>
    )
}