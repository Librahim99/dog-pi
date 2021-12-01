import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"


export default function NavBar() {
    return (
        <div>
            <SearchBar/>
            <Link to="/home/create"><button>Create Dog</button></Link>
        {/* <Link to="/home/detail"><button>Dog Detail</button></Link> */}
        </div>
    )
}
