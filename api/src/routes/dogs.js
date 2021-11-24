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
            return{
                id: d.id,
                name: d.name,
                image: d.image.url,
                height: d.height,
                weight: d.weight,
                life_span: d.life_span,
                temperament:d.temperament
            }
        })
        const allDogs = [...filteredDogsApi, ...dogDb]
        if(req.query.name){
            const name = req.query.name
            const foundDog = allDogs.filter((d) => d.name.toUpperCase().includes(name.toUpperCase()))
                res.send(foundDog)
            }
        else res.send(allDogs)

    }
    catch{(error)=>{
        next(error)
    }}
})

server.get('/search' ,async (req, res, next)=>{
    const name = req.query.name
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds',{headers:{'x-api-key':`${API_KEY}`}})
        const dogDb = await Dog.findAll({
            include: Temperament,
        })
   const foundDog = apiUrl.data.find((d) => d.name == name)
        res.send(foundDog)
})

// server.get('/', (req, res, next)=>{
//     return Dog.findAll({ 
//         include: Temperament
//     })
//     .then((dog)=>{ 
//         res.json(dog)
//     })
//     .catch((error) =>{
//         next(error)
//     })
// })

server.post('/', (req, res, next)=>{
    const {name, height, weight, life_span} = req.body
    return Dog.create({
        name, 
        height, 
        weight, 
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

server.delete('/', (req, res, next)=>{
    res.send('DELETE dogs')
})

server.put('/', (req, res, next)=>{
    res.send('PUTx dogs')
})
module.exports = server;