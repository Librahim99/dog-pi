const { Router } = require('express');
const { Temperament } = require('../db')

const server = Router();

server.get('/', (req, res, next)=>{
    return Temperament.findAll()
    .then((temperament) =>{
        res.json(temperament)
    })
    .catch((error) =>{
        next(error)
    })
})

server.post('/', (req, res, next)=>{
    const{name} = req.body
    return Temperament.create({name})
    .then((newTemperament)=>{
        newTemperament
        res.json(newTemperament)
    })
    .catch((error) =>{
        next(error)
    })
})
 
server.delete('/', (req, res, next)=>{
    res.send('DELETE temperament')
})

server.put('/', (req, res, next)=>{
    res.send('POST temperament')
})
module.exports = server;