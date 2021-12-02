import axios from "axios";
import { useState } from "react";

export default function Create() {
    const [input, setInput] = useState({
        name: "",
        image: "",
        weight: "",
        height: "",
        life_span:"",
        temperament: ""
      });
      
      const handleInputChange = function(e) {
          e.preventDefault()
          setInput({
              ...input,
              [e.target.name]: e.target.value
            });
        }
        const onSubmit= function(e){
            e.preventDefault()
            const dog={
              name: input.name,
              image: input.image,
              weight: input.weight,
              height: input.height,
              life_span: input.life_span,
              temperament: input.temperament
            }

            axios({
                method: "POST",
                url:"http://localhost:3001/api/dogs",
                data: dog
            })
        }

        
    
    return (
        <form onSubmit={onSubmit}>
            <div>
            <label>Name:</label>
            <input type="text" placeholder="Type here..." value={input.name} name="name" onChange={handleInputChange}/>
            <p></p>
            </div>
            <div>
            <label>Image:</label>
            <input type="text" placeholder="Type here..." value={input.image} name="image" onChange={handleInputChange}/>
            <p></p>
            </div>
            <div>
            <label>Weight:</label>
            <input type="text" placeholder="Type here..." value={input.weight} name="weight" onChange={handleInputChange}/>
            <p></p>
            </div>
            <div>
            <label>Height:</label>
            <input type="text" placeholder="Type here..." value={input.height} name="height" onChange={handleInputChange}/>
            <p></p>
            </div>
            <div>
            <label>Life Span:</label>
            <input type="text" placeholder="Type here..." value={input.life_span} name="life_span" onChange={handleInputChange}/>
            <p></p>
            </div>
            <div>
            <label>Temperament:</label>
            <input type="text" placeholder="Type here..." value={input.temperament} name="temperament" onChange={handleInputChange}/>
            <p></p>
            </div>            
            <button type="submit" >Create</button>
        </form>
    )
}
