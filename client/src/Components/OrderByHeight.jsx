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
        <select name="order" onChange={onOrderChange}>
        <option value="-" selected>By height</option>
            <option value={ASCENDANT}>Ascendant</option>
            <option value={DESCENDANT}>Descendant</option>
            </select>
        </div>
    )
}