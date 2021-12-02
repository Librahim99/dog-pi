import { useDispatch } from 'react-redux'
import {ASCENDANT, DESCENDANT} from '../Const/sort'
import { sort } from '../store/actions'


export default function Order() {
    const dispatch= useDispatch()
    function onOrderChange(e){
        dispatch(sort(e.target.value))
    }

    return (
        <select name="order" onChange={onOrderChange}>
            <option value={ASCENDANT}>Ascendant</option>
            <option value={DESCENDANT}>Descendant</option>
            </select>
    )
}
