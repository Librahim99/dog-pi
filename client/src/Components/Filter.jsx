import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchTemperaments, filterByTemp } from "../store/actions";



export default function Filter() {
    let temperaments = useSelector((state) => state.temperaments)
    const dispatch= useDispatch()
    function onChange(e){
        dispatch(filterByTemp(e.target.value))
    }


    return (
        <div>
<label>Temperament: </label>
        <select name="temperament" onChange={onChange}>
        <option value="-">Select</option>
        {temperaments.map((t)=>{
            return <option value={t.name}>{t.name}</option>
        })}
     </select>
        </div>
    )
}
