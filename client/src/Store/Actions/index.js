import axios from 'axios'
export const FETCH_DOGS = 'FETCH_DOGS'
export const DOG_DETAIL = 'DOG_DETAIL'
export const SEARCH_DOGS = 'SEARCH_DOGS'
export const FETCH_TEMPERAMENTS = 'FETCH_TEMPERAMENTS'
export const SORT = 'SORT'
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN'
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP'

export function fetchDogs(){
    return function(dispatch){
        axios.get('http://localhost:3001/api/dogs/')
        .then((dogs) =>{
            dispatch({
                type: FETCH_DOGS,
                payload: dogs.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function fetchTemperaments(){
    return function(dispatch){
        axios.get('http://localhost:3001/api/temperaments/')
        .then((temperaments) =>{
            dispatch({
                type: FETCH_TEMPERAMENTS,
                payload: temperaments.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

// export function dogDetail(dogId){
//     return function(dispatch){
//         axios.get('http://localhost:3001/api/dogs/' + dogId)
//         .then((dogs) =>{
//             dispatch({
//                 type: DOG_DETAIL,
//                 payload: dogs.data
//             })
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     }
// }

export function searchDogs(search){
    return function(dispatch){
        axios.get('http://localhost:3001/api/dogs?name=' + search)
        .then((dogs) =>{
            dispatch({
                type: SEARCH_DOGS,
                payload: dogs.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function sort(order){
    return{
    type: SORT,
    payload: order
    }
}

export function filterByOrigin(origin){
    return{
        type: FILTER_BY_ORIGIN,
        payload: origin
    }
}

export function filterByTemp(temp){
    return{
        type: FILTER_BY_TEMP,
        payload: temp
    }
}