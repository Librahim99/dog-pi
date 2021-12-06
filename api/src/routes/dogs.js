const { Router, application } = require('express');
const { Dog, Temperament } = require('../db')
const axios = require('axios')
const{API_KEY} = process.env

const server = Router();


server.get('/', async (req, res, next)=>{
    try{
        const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds',{headers:{'x-api-key':`${API_KEY}`}})
        const dogDb = await Dog.findAll({
            include: Temperament,
        })
        const DogsApi = apiUrl.data
        const filteredDogsApi = DogsApi.map((d) => {
            let minWeight = d.weight.metric.split(" - ")[0]
            let maxWeight = d.weight.metric.split(" - ")[1]
            if(minWeight=="NaN"){
                minWeight = 1
            }
            let minHeight = d.height.metric.split(" - ")[0]
            let maxHeight = d.height.metric.split(" - ")[1]
            return{
                id: d.id,
                name: d.name,
                image: d.image.url,
                temperament:d.temperament,
                min_height: minHeight,
                max_height: maxHeight,
                min_weight: minWeight,
                max_weight: maxWeight,
                life_span: d.life_span
            }
        })
        const allDogs = [...filteredDogsApi, ...dogDb]
        if(req.query.name){
            const name = req.query.name
            const foundDogs = allDogs.filter((d) => d.name.toUpperCase().includes(name.toUpperCase()))
                if(foundDogs == "")res.send('There is no dog with that name')
                else res.send(foundDogs)
            }
        else res.send(allDogs)
    }

    catch{(error)=>{
        next(error)
    }}
})

server.get('/:id', async (req, res, next)=>{
    try{
        const {id} = req.params
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds',{headers:{'x-api-key':`${API_KEY}`}})
        const dogDb = await Dog.findAll({
            include: Temperament,
        })
        const DogsApi = apiUrl.data
        const filteredDogsApi = DogsApi.map((d) => {
            return{
                id: d.id,
                name: d.name,
                image: d.image.url,
                temperament:d.temperament,
                height: d.height.metric,
                weight: d.weight.metric,
                life_span: d.life_span
            }
        })
        const allDogs = [...filteredDogsApi, ...dogDb]
        const foundDog= allDogs.find((d)=> d.id == id)
            if(!foundDog) res.send('Theres is no breed with that id')
            else res.send(foundDog)
    }
    catch{(error)=>{
        next(error)
    }}
})

server.post('/', (req, res, next)=>{
    const {name, image, temperament, min_height, max_height, min_weight, max_weight, life_span} = req.body
    return Dog.create({
        name, 
        image,
        temperament,
        min_height, 
        max_height, 
        min_weight,
        max_weight,
        life_span}) 
    .then((newDog) =>{
        res.status(201).json(newDog)
    })
    .catch((error) =>{
        next(error)
    })
})

server.post('/:dogID/temperament/:temperamentID/', (req, res, next) =>{
    const{dogID, temperamentID} = req.params
    return Dog.findByPk(dogID)
    .then((dog) =>{
        dog.addTemperament(temperamentID)
    res.send(200)
}) .catch((error) =>{
    next(error)
})
})


module.exports = server;