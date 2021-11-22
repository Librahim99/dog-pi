const { Router } = require('express');


const server = Router();

server.get('/', (req, res, next)=>{
    res.send('GET temperament')
})

server.put('/', (req, res, next)=>{
    res.send(' PUT temperament')
})
 
server.delete('/', (req, res, next)=>{
    res.send('DELETE temperament')
})

server.post('/', (req, res, next)=>{
    res.send('POST temperament')
})
module.exports = server;