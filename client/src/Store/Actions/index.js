import axios from 'axios'
export const FETCH_DOGS = 'FETCH_DOGS'

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

export function SearchDogs(){}