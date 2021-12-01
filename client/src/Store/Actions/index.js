import axios from 'axios'
export const FETCH_DOGS = 'FETCH_DOGS'
export const DOG_DETAIL = 'DOG_DETAIL'

export function fetchDogs(name){
    return function(dispatch){
        axios.get('http://localhost:3001/api/dogs')
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

// export function dogDetail(id){
//     return function(dispatch){
//         axios.get('http://localhost:3001/api/dogs')
//         .then((dogs) =>{
//             // console.log(dogs)
//             dispatch({
//                 type: DOG_DETAIL,
//                 payload: dogs.data.id
//             })
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     }
// }

export function SearchDogs(){}