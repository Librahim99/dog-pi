import { DOG_DETAIL, FETCH_DOGS, SEARCH_DOGS } from "../actions";

 const initialState = {
     dogs: [],
     filteredDogs: []
 }

 export default function reducer(state= initialState, action){

    switch(action.type){
        case FETCH_DOGS:
            return{
                ...state,
                dogs: action.payload
            }
       case SEARCH_DOGS:
           return{
               ...state,
               dogs: action.payload
           }
        default:
                return state
    }
 }