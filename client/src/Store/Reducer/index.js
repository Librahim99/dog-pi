import { DOG_DETAIL, FETCH_DOGS } from "../Actions";

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
        // case DOG_DETAIL:
        //     return {
        //         ...state,
        //         filteredDogs: action.payload
        //     }
        default:
                return state
    }
 }