var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  var message = {
    from: 'Changala',
    text: 'Yes i am here!'
  }

  socket.emit('createMessage', message);
});

socket.on('newMessage', function (message) {
  console.log('New message received', message);
});
