import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchTemperaments } from "../store/actions";



export default function Filter() {
    let temperaments = useSelector((state) => state.temperaments)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTemperaments())
    }, []);

    

    return (
        <select name="temperament" id="">
        <option value="title">Temperament</option>
        {temperaments.map((t)=>{
            return <option value="">{t.name}</option>
        })}
     </select>
    )
}
