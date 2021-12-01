import { Link } from "react-router-dom";
import Dogs from '../../Components/Dogs'

export default function Home(){
    return (
        <><div>
        <div>Esta es la pagina Home</div>
        <Dogs></Dogs>
        <Link to="/home/create"><button>Create Dog</button></Link>
        <Link to="/home/detail"><button>Dog Detail</button></Link>
        </div>
        </>
    )
}
