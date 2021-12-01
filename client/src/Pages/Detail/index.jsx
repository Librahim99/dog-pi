import { Link } from "react-router-dom";
import Details from "../../Components/Details";

export default function Detail(){
    return(
        <>
        <Link to="/home"><button>Home</button></Link>
        <Details></Details>
</>
    )
}