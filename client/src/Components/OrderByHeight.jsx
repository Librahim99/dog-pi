import { useDispatch } from 'react-redux'
import {ASCENDANT, DESCENDANT} from '../Const/sort'
import { orderByHeight } from "../Store/Actions"

export default function OrderByHeight() {
    const dispatch= useDispatch()
    function onOrderChange(e){
        dispatch(orderByHeight(e.target.value))
    }

    return (
        <div>
        <label>By height: </label>
        <select name="order" onChange={onOrderChange}>
        <option value="-" selected>Choose an option</option>
            <option value={ASCENDANT}>Ascendant</option>
            <option value={DESCENDANT}>Descendant</option>
            </select>
        </div>
    )
}