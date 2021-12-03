import { ASCENDANT } from "../../Const/sort";
import { DOG_DETAIL, FETCH_DOGS, SEARCH_DOGS, FETCH_TEMPERAMENTS, SORT, FILTER_BY_ORIGIN, FILTER_BY_TEMP, SORT_BY_WEIGHT} from "../actions";

 const initialState = {
     dogs: [],
     filteredDogs: [],
     temperaments: []
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
        case DOG_DETAIL:
            return{
                ...state,
                dogs: action.payload
                }
        case FETCH_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload
                }

        case SORT:
            let orderedDogs= [...state.dogs]
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
            if(action.payload == "apiDogs"){
                return{
                    ...state,
                    filteredDogs: filterApiDogs
                }
            }
            else if(action.payload == "dbDogs"){
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

        default:
            return state
    }
 }