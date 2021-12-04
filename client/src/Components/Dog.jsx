import { Link } from "react-router-dom"


export default function Dog({name, image, id, min_weight,max_weight, life_span, temperament}) {
    // function onClick() {
    //     console.log(foundDog)
    // }
    return (
        <div>
            <h3>{name}</h3>
            <Link 
            to={`/home/detail/${id}`}>
            <img src={image} alt="Perro.jpg"style={{height:'250px'}} />
            </Link>
            <h4>Min weight: {min_weight} kg.</h4>
            <h4>Temperaments: {temperament}</h4>
            {/* <h4>Life span: {life_span}</h4> */}
        </div>
    )
}

