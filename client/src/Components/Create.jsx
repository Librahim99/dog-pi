import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemperaments } from "../Store/Actions";
import CreateTemp from "./CreateTemp";
import s from './Create.module.css'

export default function Create() {
    let temperaments = useSelector((state) => state.temperaments)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTemperaments())
    }, []);
    const [input, setInput] = useState({
        name: "",
        image: "",
        min_weight: "",
        max_weight: "",
        min_height: "",
        max_height: "",
        life_span: "",
        temperament: ""
    });

    const validate= function(input){
        let errors= {}
        if(input.name === "" || !input.image || !input.min_weight || !input.max_weight || !input.min_height || !input.max_height || !input.life_span ){
            errors.msg = "all fields must be completed"
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
    return (<>
    <div className={s.FormDiv}>
        <h1>Create Dog</h1>
        <form onSubmit={onSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" placeholder="Type here..." value={input.name} name="name" onChange={handleInputChange}/>
                <p></p>
            </div>
            <div>
                <label>Image:</label>
                <input type="text" placeholder="Paste URL here..." value={input.image} name="image" onChange={handleInputChange}/>
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
                <select name="temperament"  multiple onChange={handleInputChange} >
                    {temperaments.map((t)=>{
                        return <option value={t.name} >{t.name}</option>
                    })}
                </select> 
                <p></p>
            </div>            
            <button type="submit" disabled={ errors.msg !== undefined || input.name === "" ? true : false}>Create</button>
        </form>
            <CreateTemp/>
    </div>
    </>
    )
}
