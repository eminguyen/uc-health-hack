var socket;

socket = io();

socket.on('led', function() {
  document.body.classList.add('red');
  document.body.classList.remove('green');
});

socket.on('ledoff', function() {
})
