import { useDispatch } from 'react-redux'
import {ASCENDANT, DESCENDANT} from '../Const/sort'
import { orderByLifeSpan } from "../Store/Actions"


export default function OrderByLifeSpan() {
    const dispatch= useDispatch()
    function onOrderChange(e){
        dispatch(orderByLifeSpan(e.target.value))
    }

    return (
        <div>
        <select name="order" onChange={onOrderChange}>
        <option value="-" selected>By life span</option>
            <option value={ASCENDANT}>Ascendant</option>
            <option value={DESCENDANT}>Descendant</option>
            </select>
        </div>
    )
}