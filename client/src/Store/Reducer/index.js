import { ASCENDANT } from "../../Const/sort";
import { FETCH_DOGS, SEARCH_DOGS, FETCH_TEMPERAMENTS, SORT, FILTER_BY_ORIGIN, FILTER_BY_TEMP, SORT_BY_WEIGHT, SORT_BY_HEIGHT, SORT_BY_LIFE_SPAN, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from "../Actions";

 const initialState = {
     dogs: [],
     filteredDogs: [],
     temperaments: [],
     favorites: []
 }

 export default function reducer(state= initialState, action){

    switch(action.type){
        case FETCH_DOGS:
            return{
                ...state,
                dogs: action.payload,
                filteredDogs: action.payload
            }

        case SEARCH_DOGS:
           return{
                ...state,
                filteredDogs: action.payload
           }
           
        case FETCH_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload
                }

        case SORT:
            let orderedDogs= [...state.dogs]
            if(action.payload !== "-"){
                orderedDogs= orderedDogs.sort((a,b)=>{
                    if(a.name < b.name){
                        return action.payload === ASCENDANT ? -1 : 1
                    }
                    if(a.name > b.name){
                        return action.payload === ASCENDANT ? 1 : -1
                    }
                    return 0
                })
                return{
                    ...state,
                    filteredDogs: [...orderedDogs]
                }
            } else return {
                ...state,
                filteredDogs: [...state.dogs]
            }

        case FILTER_BY_ORIGIN:
            let filterByOrigin = [...state.dogs]
            let filterApiDogs = filterByOrigin.filter((d)=>{ 
                if(typeof d.id == "number"){
                    return d
                }})
            let filterDbDogs = filterByOrigin.filter((d)=>{ 
                if(typeof d.id !== "number"){
                    return d
                }})
            if(action.payload === "apiDogs"){
                return{
                    ...state,
                    filteredDogs: filterApiDogs
                }
            }
            else if(action.payload === "dbDogs"){
                return {
                    ...state,
                filteredDogs: filterDbDogs
                }
            }
            else return{
                ...state,
                filteredDogs: filterByOrigin
            }

        case FILTER_BY_TEMP:
            let filterByTemp = [...state.dogs]
            if(action.payload === "-"){
                return {
                    ...state,
                    filteredDogs: filterByTemp
                }
            }
            let filteredByTemp = filterByTemp.filter((d) => {
                if(d.temperament){
                    if(d.temperament.includes(action.payload)){
                        return d
                    }
                }
            })
            return{
                ...state,
                filteredDogs: filteredByTemp
            }

        case SORT_BY_WEIGHT:
            let orderedByWeightDogs= [...state.dogs]
            if(action.payload !== "-"){
                orderedByWeightDogs= orderedByWeightDogs.sort((a,b)=>{
                    if(parseInt(a.min_weight) <= parseInt(b.min_weight)){
                        return action.payload === ASCENDANT ? -1 : 1
                    }
                    if(parseInt(a.min_weight) >= parseInt(b.min_weight)){
                        return action.payload === ASCENDANT ? 1 : -1
                    }
                    return 0
                })
                return{
                    ...state,
                    filteredDogs: [...orderedByWeightDogs]
                }
            }else return{
                ...state,
                filteredDogs: [...state.dogs]
            }

        case SORT_BY_HEIGHT:
        let orderedByHeightDogs= [...state.dogs]
        if(action.payload !== "-"){
            orderedByHeightDogs= orderedByHeightDogs.sort((a,b)=>{
                if(parseInt(a.min_height) <= parseInt(b.min_height)){
                    return action.payload === ASCENDANT ? -1 : 1
                }
                if(parseInt(a.min_height) >= parseInt(b.min_height)){
                    return action.payload === ASCENDANT ? 1 : -1
                }
                return 0
            })
            return{
                ...state,
                filteredDogs: [...orderedByHeightDogs]
            }
        }else return{
            ...state,
            filteredDogs: [...state.dogs]
        }

        case SORT_BY_LIFE_SPAN :
        let orderedByLifeSpanDogs= [...state.dogs]
        if(action.payload !== "-"){
            orderedByLifeSpanDogs= orderedByLifeSpanDogs.sort((a,b)=>{
                if(parseInt(a.life_span.split(" ")[0]) <= parseInt(b.life_span.split(" ")[0])){
                    return action.payload === ASCENDANT ? -1 : 1
                }
                if(parseInt(a.life_span.split(" ")[0]) >= parseInt(b.life_span.split(" ")[0])){
                    return action.payload === ASCENDANT ? 1 : -1
                }
                return 0
            })
            return{
                ...state,
                filteredDogs: [...orderedByLifeSpanDogs]
            }
        }else return{
            ...state,
            filteredDogs: [...state.dogs]
        }

        case ADD_TO_FAVORITES:
            let addFavorites = [...state.favorites]
            
            
            if(!(addFavorites.find((f) => f.id === action.payload.id))){
                addFavorites.push(action.payload)
            }
            return{
                ...state,
                favorites: addFavorites
            }

        case REMOVE_FROM_FAVORITES:
            let removeFavorites = [...state.favorites]
            let newFavorites = []
            for (let i = 0; i < removeFavorites.length; i++) {
                if(removeFavorites[i].id !== action.payload.id){
                    newFavorites.push(removeFavorites[i])
                }
            }
            return{
                ...state,
                favorites: newFavorites
            }
        default:
            return state
    }
 }