import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { fetchTemperaments } from "../store/actions";
import Filter from "./Filter";
import FilterApiDb from "./FilterApiDb";
import Order from "./Order";
import SearchBar from "./SearchBar"


export default function NavBar() {
    let temperaments = useSelector((state) => state.temperaments)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTemperaments())
    }, []);

    return (
        <div>
            <SearchBar/>
            <Order/>
            <Filter/>
            <FilterApiDb/>
            <Link to="/home/create"><button>Create Dog</button></Link>
        </div>
    )
}
