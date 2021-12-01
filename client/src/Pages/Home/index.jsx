import { Link } from "react-router-dom";
import Dogs from '../../Components/Dogs'
import NavBar from "../../Components/NavBar";

export default function Home(){
    return (
        <><div>
        <NavBar/>
        <Dogs></Dogs>
        </div>
        </>
    )
}
