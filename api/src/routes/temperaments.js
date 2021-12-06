const { Router } = require('express');
const { Temperament, Dog } = require('../db');
const axios = require('axios')
const{API_KEY} = process.env

const server = Router();


server.get('/', async (req, res) => {
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds', {headers: {'x-api-key': `${API_KEY}`}});
    const temperament = apiUrl.data.map(element => element.temperament)
    let temperaments = temperament.toString().trim().split(/\s*,\s*/);
    let splittemperament = temperaments.filter(word => word.length > 0);
    splittemperament.forEach(element => {
        Temperament.findOrCreate({
            where: {name: element}
        })
    });
    const allTemperament = await Temperament.findAll();
    res.send(allTemperament);
})

server.post('/', (req, res, next)=>{
    const{name} = req.body
    return Temperament.create({name})
    .then((newTemperament)=>{
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