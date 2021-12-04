import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemperaments } from "../Store/Actions";
import CreateTemp from "./CreateTemp";

export default function Create() {
    let temperaments = useSelector((state) => state.temperaments)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTemperaments())
    }, []);
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

    const validate= function(input){
        let errors= {}
        if(!input.name){
            errors.name = "this field can't be empty"
        }
        if(!input.image){
            errors.image = "this field can't be empty"
        }
        if(!input.min_weight){
            errors.min_weight = "this field can't be empty"
        }
        if(!input.max_weight){
            errors.max_weight = "this field can't be empty"
        }
        if(!input.min_height){
            errors.min_height = "this field can't be empty"
        }
        if(!input.max_height){
            errors.max_height = "this field can't be empty"
        }
        if(!input.life_span){
            errors.life_span = "this field can't be empty"
        }

        return errors
    }

    const [errors, setErrors] = useState("");

    const handleInputChange = function(e) {
        setInput({
              ...input,
              [e.target.name]: e.target.value,
              
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        // setInput({
        //     ...input,
        //     temperament: e.target.value
        // })
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
            temperament: null
            }))
    }
    const disableButton = function(){
        if(input.name !== "" || input.image !== "" || input.min_weight !== "" || input.max_weight!== "" || input.min_height !== "" ||input.max_height!== "" || input.life_span !== "" || input.temperament !== null){
            return "false"
        } else return "true"
    }

   
        
    
    return (<>
        <form onSubmit={onSubmit}>
            <div>
            <label>Name:</label>
            <input type="text" placeholder="Type here..." value={input.name} name="name" onChange={handleInputChange}/>

            <p>{errors.name}</p>
            </div>
            <div>
            <label>Image:</label>
            <input type="text" placeholder="Type here..." value={input.image} name="image" onChange={handleInputChange}/>
            <p>{errors.image}</p>
            </div>
            <div>
            <label>Min weight:</label>
            <input type="text" placeholder="Type here..." value={input.min_weight} name="min_weight" onChange={handleInputChange}/>
            <p>{errors.min_weight}</p>
            </div>
            <div>
            <label>Max weight:</label>
            <input type="text" placeholder="Type here..." value={input.max_weight} name="max_weight" onChange={handleInputChange}/>
            <p>{errors.max_weight}</p>
            </div>
            <div>
            <label>Min height:</label>
            <input type="text" placeholder="Type here..." value={input.min_height} name="min_height" onChange={handleInputChange}/>
            <p>{errors.min_height}</p>
            </div>
            <div>
            <label>Max height:</label>
            <input type="text" placeholder="Type here..." value={input.max_height} name="max_height" onChange={handleInputChange}/>
            <p>{errors.max_height}</p>
            </div>
            <div>
            <label>Life Span:</label>
            <input type="text" placeholder="Type here..." value={input.life_span} name="life_span" onChange={handleInputChange}/>
            <p>{errors.life_span}</p>
            </div>
            <div>
            <label>Temperament:</label>
            <select name="temperament"  multiple onChange={handleInputChange} >
                {temperaments.map((t)=>{
                    return <option value={t.name} >{t.name}</option>
                })}
            </select>
            <p></p>
            </div>            
            <button disable={disableButton()}>Create</button>
        </form>
            <CreateTemp/>
            </>
    )
}
