import { Link } from "react-router-dom"
import s from './Dog.module.css'


export default function Dog({name, image, id, min_weight,max_weight, life_span, temperament}) {
      if(!(image.includes("png")) && !(image.includes("jpg"))){
        image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F53%2Ff7%2F26%2F53f726580159614740be773b95114652.jpg&f=1&nofb=1"
    }
    return (
        <div className={s.DogCard}>
            <div className={s.titleImg}>
            <h3>{name}</h3>
            <Link 
            to={`/home/detail/${id}`}>
            <img src={image} alt="Perro.jpg" />
            </Link>
            </div>
            <div className={s.dataDog}>
                <div className={s.DataDogDiv}>
                    <div>
            <h4>Min weight:</h4>
            <h5>{min_weight} kg.</h5>
                </div>
                    <div>
            <h4>Temperaments:</h4>
            <h5>{temperament}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

