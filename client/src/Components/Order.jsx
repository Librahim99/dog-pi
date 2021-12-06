import { useDispatch } from 'react-redux'
import {ASCENDANT, DESCENDANT} from '../Const/sort'
import { sort } from "../Store/Actions"


export default function Order() {
    const dispatch= useDispatch()
    function onOrderChange(e){
        dispatch(sort(e.target.value))
    }

    return (
        <div>
        <select  name="order" onChange={onOrderChange}>
        <option value="-" selected>Alphabetically</option>
            <option value={ASCENDANT}>Ascendant</option>
            <option value={DESCENDANT}>Descendant</option>
            </select>
        </div>
    )
}
