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
import s from './NavBar.module.css'


export default function NavBar() {
    // let temperaments = useSelector((state) => state.temperaments)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTemperaments())
    }, []);

    return (<>
            <div className={s.NavBar}>
            <div className={s.title}>
                <Link to= '/'>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd30y9cdsu7xlg0.cloudfront.net%2Fpng%2F151542-200.png&f=1&nofb=1" alt="" />
                </Link>
                <h1>MY DOGS APP</h1>
            </div>
            <div className={s.buttons}>
                <div>
                </div>
                <div>
                </div>
            <Link to="/home/favorites"><button>Favorites</button></Link>
            <Link to="/home/create"><button>Create Dog</button></Link>
            </div>
            <div className={s.searchBar}>
            <SearchBar/>
            </div>
            </div>
            <div className={s.ordersFilters}>
            <div className={s.orders}>
            <h4>Order:</h4>
            <Order/>
            <OrderByWeight/>
            <OrderByHeight/>
            <OrderByLifeSpan/>
            </div>
            <div className={s.filters}>
            <h4>Filter:</h4>
            <Filter/>
            <FilterApiDb/>
            </div>
            </div>
            </>
    )
}
