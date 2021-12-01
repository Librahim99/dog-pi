import { Link } from "react-router-dom";
import Dogs from '../../Components/Dogs'
import NavBar from "../../Components/NavBar";

export default function Home(){
    return (
        <><div>
        <div>Esta es la pagina Home</div>
        <NavBar/>
        <Dogs></Dogs>
        
        </div>
        </>
    )
}
