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
        <select name="temperament" onChange={onChange}>
        <option value="-">Temperament</option>
        {temperaments.map((t)=>{
            return <option key={t.id} value={t.name}>{t.name}</option>
        })}
     </select>
        </div>
    )
}
