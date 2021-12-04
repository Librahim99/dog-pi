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