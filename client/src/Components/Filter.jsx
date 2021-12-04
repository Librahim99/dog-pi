import { useDispatch, useSelector } from "react-redux"
import { filterByTemp } from "../Store/Actions"



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
        <option value="-">Choose an option</option>
        {temperaments.map((t)=>{
            return <option value={t.name}>{t.name}</option>
        })}
     </select>
        </div>
    )
}
