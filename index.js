
import express from 'express';
const app = express();
import { Server } from 'socket.io';
import { createServer } from 'http';
const server = createServer(app);
const io = new Server(server,{
cors:{
    origin:'*',
    methods:["GET","POST"],
    credentials:true,
}
});
const port = 5000;

app.get('/', (req, res) => {

    res.send("Hello !!!");
});

io.on('connection', (socket) => {
    console.log("User connnected with id :",socket.id)

    socket.emit("welcome",`Welcome to the server, ${socket.id}`)
    socket.on("disconnected",()=>{
        console.log("User Disconnected",socket.id);  
    })
    socket.on("visitor-data",({senderId,image,reason})=>{
        console.log("visitor data",{senderId,image,reason});
        io.to(senderId).emit("new-visitor",{image,reason})
    })
    socket.on("message",({senderId,image,reason})=>{
        console.log({senderId,image,reason});
        io.to(senderId).emit("recieve-message",{image,reason})
        
})
});

server.listen(port, () => {
    console.log(`Server is listening at the port: ${port}`);
});
