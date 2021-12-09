import { useDispatch } from "react-redux"
import { filterByOrigin } from "../Store/Actions";


export default function FilterApiDb() {
    const dispatch= useDispatch()
    function onChange(e){
        dispatch(filterByOrigin(e.target.value))
    }
        
        

    return (<div>

        <select name="ApiDb" onChange={onChange} >
            <option value="allDogs">All Dogs</option>
            <option value="apiDogs">Api Dogs</option>
            <option value="dbDogs">My Dogs</option>
        </select>
    </div>
    )
}
