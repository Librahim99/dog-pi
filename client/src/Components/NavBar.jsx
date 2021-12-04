import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { fetchTemperaments } from "../Store/Actions";
import Filter from "./Filter";
import FilterApiDb from "./FilterApiDb";
import Order from "./Order";
import OrderByHeight from "./OrderByHeight";
import OrderByLifeSpan from "./OrderByLifeSpan";
import OrderByWeight from "./OrderByWeight";
import SearchBar from "./SearchBar"


export default function NavBar() {
    // let temperaments = useSelector((state) => state.temperaments)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTemperaments())
    }, []);

    return (
        <div>
            <SearchBar/>
            <Order/>
            <OrderByWeight/>
            <OrderByHeight/>
            <OrderByLifeSpan/>
            <Filter/>
            <FilterApiDb/>
            <Link to="/home/create"><button>Create Dog</button></Link>
        </div>
    )
}
