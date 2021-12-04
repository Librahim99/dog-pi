import axios from "axios";
import { useState } from "react"

export default function CreateTemp() {
    const [input, setInput] = useState({
        name:null
    })
    
    
    const handleInputChange = function(e) {
        e.preventDefault()
        setInput({name: e.target.value});
    }

    const onTempSubmit =function(e){
        e.preventDefault()

        axios({
            method: "POST",
            url:"http://localhost:3001/api/temperaments/",
            data: input
        })

        setInput({
            name: ""
        })




    }

    return (<>
    <form onSubmit={onTempSubmit}>
        <input type="text" placeholder="Type here..." value={input.name} name="name" onChange={handleInputChange}/>
        <button type="submit" disabled={input.name !== "" ? false : true}>Create Temperament</button>
    </form>
    </>
    )
}
