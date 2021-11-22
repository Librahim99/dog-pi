const { Router } = require('express');

const server = Router();

server.get('/', (req, res, next)=>{
    res.send('GET dogs')
})

server.put('/', (req, res, next)=>{
    res.send(' PUT dogs')
})

server.delete('/', (req, res, next)=>{
    res.send('DELETE dogs')
})

server.post('/', (req, res, next)=>{
    res.send('POST dogs')
})
module.exports = server;