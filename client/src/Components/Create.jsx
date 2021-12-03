import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Create() {
    let temperaments = useSelector((state) => state.temperaments)
    const [input, setInput] = useState({
        name: null,
        image: null,
        min_weight: null,
        max_weight: null,
        min_height: null,
        max_height: null,
        life_span:null,
        temperament: null
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
              min_weight: input.min_weight,
              max_weight: input.max_weight,
              min_height: input.min_height,
              max_height: input.max_height,
              life_span: input.life_span,
              temperament: input.temperament
            }

            axios({
                method: "POST",
                url:"http://localhost:3001/api/dogs",
                data: dog
            })
            setInput(({
                name: "",
                image: "",
                min_weight: "",
                max_weight: "",
                min_height: "",
                max_height: "",
                life_span:"",
                temperament: ""
              }))
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
            <label>Min weight:</label>
            <input type="text" placeholder="Type here..." value={input.min_weight} name="min_weight" onChange={handleInputChange}/>
            <p></p>
            </div>
            <div>
            <label>Max weight:</label>
            <input type="text" placeholder="Type here..." value={input.max_weight} name="max_weight" onChange={handleInputChange}/>
            <p></p>
            </div>
            <div>
            <label>Min height:</label>
            <input type="text" placeholder="Type here..." value={input.min_height} name="min_height" onChange={handleInputChange}/>
            <p></p>
            </div>
            <div>
            <label>Max height:</label>
            <input type="text" placeholder="Type here..." value={input.max_height} name="max_height" onChange={handleInputChange}/>
            <p></p>
            </div>
            
            <div>
            <label>Life Span:</label>
            <input type="text" placeholder="Type here..." value={input.life_span} name="life_span" onChange={handleInputChange}/>
            <p></p>
            </div>
            <div>
            <label>Temperament:</label>
            <select name="temperament" onChange={handleInputChange} value={input.temperament} >
                <option  value="none">None</option>
                {temperaments.map((t)=>{
                    return <option value={t.name}>{t.name}</option>
                })}
            </select>
            {/* <label>Temperament:</label>
            <input type="text" placeholder="Type here..." value={input.temperament} name="temperament" onChange={handleInputChange}/> */}
            <p></p>
            </div>            
            <button type="submit" >Create</button>
        </form>
    )
}
