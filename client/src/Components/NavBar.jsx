import { Link } from "react-router-dom"
import Filter from "./Filter";
import FilterApiDb from "./FilterApiDb";
import Order from "./Order";
import SearchBar from "./SearchBar"


export default function NavBar() {
    return (
        <div>
            <SearchBar/>
            <select name="filter">
            <option value="title" selected>Filter</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
            <option value="height">Height</option>
            <option value="life_span">Life Span</option>
            </select>
            <Order/>
            <Filter/>
            <FilterApiDb/>
            <Link to="/home/create"><button>Create Dog</button></Link>
        </div>
    )
}
