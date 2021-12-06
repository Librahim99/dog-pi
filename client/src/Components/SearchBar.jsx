import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchDogs } from "../Store/Actions";
import s from './NavBar.module.css'


export default function SearchBar() {
    const [search, setSearch] = useState('');

    let dispatch = useDispatch();

    function onSubmit(e){
        e.preventDefault()
        dispatch(searchDogs(search))
    }

    function onInputChange(e){
        e.preventDefault()
        setSearch(e.target.value)
    }

    return <div>
    <form onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange}/>
        <input className={s.searchBarButton} type='submit' value='Search'/>
    </form>
        </div>
   
}
