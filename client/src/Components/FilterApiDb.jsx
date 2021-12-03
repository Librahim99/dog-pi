import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { filter_dogs } from "../store/actions";

export default function FilterApiDb() {
    const dispatch= useDispatch()
    function onChange(e){
        dispatch(filter_dogs(e.target.value))
    }
        
        

    return (
        <select name="ApiDb" onChange={onChange} >
            <option value="allDogs" selected>All Dogs</option>
            <option value="apiDogs">Api Dogs</option>
            <option value="dbDogs">My Dogs</option>
        </select>
    )
}
