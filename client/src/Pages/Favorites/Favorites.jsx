import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Dog from "../../Components/Dog"
import s from '../buttonHome.module.css'
import ss from './Favorites.module.css'
export default function Favorites() {

    let favorites = useSelector((state) => [...state.favorites])
    return (
        <>
        <Link to="/home">
            <div className={s.home}>
            <button >⌂</button>
            </div>
            </Link>
        <h1 className={ss.title}>My favorite dogs</h1>
        <div className={ss.favoritesDiv}>
            {favorites.map((dog)=>{
                return <Dog key={dog.name} name={dog.name} image={dog.image} id={dog.id} min_weight={dog.min_weight} max_weight={dog.max_weight} life_span={dog.life_span} temperament={dog.temperament}/>
            })}
        </div>
    </>
)


}
