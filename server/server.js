const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
app = new express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'chris',
    text: 'This is my text',
    createdAt: 123
  });

  socket.on('createMessage', (newMessage) => {
      console.log('new message: ',newMessage);
  });

  socket.on('disconnect', () => {
      console.log('user disconnected.');
  });
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
