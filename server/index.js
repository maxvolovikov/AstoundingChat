var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 3001;

app.get('/', function (req, res) {
  res.send('<h1>Hello Chat</h1>');
});

io.on('connection', (socket)=>{
    console.log(`a user is connected`);
    socket.on('chat message', (msg)=>{
        console.log('message: ', JSON.stringify(msg));
        io.emit('chat message', msg)
    });
})

http.listen(port, ()=>{
    console.log(`
        Server is listening on port ${port}!
    `)
})