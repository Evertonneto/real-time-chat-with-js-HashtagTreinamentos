const http = require('http');
const express = require('express');
const app = express();

const servidorHttp= http.createServer(app);
const io = require('socket.io')(servidorHttp);

io.addListener('connection',(socket)=> {
    console.log("Um usuário conectou!")
    socket.addListener('nova mensagem', (mensagem)=> {
        io.emit('nova mensagem', mensagem)
    })
})



app.use(express.static("public"));

servidorHttp.listen(1025);