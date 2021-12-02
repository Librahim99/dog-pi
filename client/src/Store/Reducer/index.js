import { ASCENDANT } from "../../Const/sort";
import { DOG_DETAIL, FETCH_DOGS, SEARCH_DOGS, FETCH_TEMPERAMENTS, SORT} from "../actions";

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
        default:
            return state
    }
 }