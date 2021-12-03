import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {fetchDogs} from "../Store/Actions"
import Dog from './Dog'
import Pagination from "./Pagination";

export default function Dogs(){
    
    if(typeof dogs !== "string"){
    return(
        <Pagination></Pagination>
    )
    }
    else return (
        <div>There is no dog with that name :/</div>
    )
}