const { Router } = require('express');
const { Dog } = require('../db')


const server = Router();

server.get('/', (req, res, next)=>{
    return Dog.findAll()
    .then((dog)=>{ 
        res.json(dog)
    })
    .catch((error) =>{
        next(error)
    })
})

server.post('/', (req, res, next)=>{
    const {name, height, weight, life_span} = req.body
    return Dog.create({
        name, 
        height, 
        weight, 
        life_span}) 
    .then((newDog) =>{
        newDog
        res.status(201).json(newDog)
    })
    .catch((error) =>{
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