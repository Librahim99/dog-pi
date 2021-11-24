import { Link } from "react-router-dom";

export default function Home(){
    return (
        <>
        <div>Esta es la pagina Home</div>
        <Link to="/home/create"><button>Create Dog</button></Link>
        </>
    )
}
