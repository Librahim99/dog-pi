import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchDogs } from "../Store/Actions";
import Dog from "./Dog"

export default function Pagination() {
    let dogs = useSelector((state) => state.filteredDogs)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDogs())
    }, []);
    const content = 8
    const [indexOne, setIndexOne] = useState(0);
    const [indexTwo, setIndexTwo] = useState(8);
    const [page, setPage] = useState(2);

    let dogsPages = []
    dogsPages = dogs.slice(indexOne, indexTwo)
    
    let maxPages = Math.ceil((dogs.length) / 8 ) + 1
    
    
    const OnPageClick =function(e){
        if(page <= 0) setPage(1)
        if(page >= maxPages) setPage(maxPages -1)
        if(page > 0 && page < maxPages){
            if(page){
                setIndexOne((parseInt(page) -1 ) * content)
                console.log(indexOne)
                setIndexTwo(parseInt(page) * content)
                console.log(indexTwo)
                if(e.target.name=== "prev_page"){
                    setPage(page - 1)
                }
                else setPage(page + 1)
            }
        }
    }
    

    

if(typeof dogsPages !== "string"){

    return (<>
        <div>
            {dogsPages.map((dog) =>(
                <Dog key={dog.name} name={dog.name} image={dog.image} id={dog.id} min_weight={dog.min_weight} max_weight={dog.max_weight} life_span={dog.life_span} temperament={dog.temperament}/>
                ))}
        </div>
        <div>
                <button name="prev_page" onClick={OnPageClick}>Prev Page</button>
                <button name="next_page" onClick={OnPageClick}>Next Page</button>
        </div>
        </>
    )
}
    else return (
        <div>There is no dog with that name :/</div>
    )
}
