var socket;

socket = io();

var elements = document.getElementsByClassName("whitney");

socket.on('led', function() {
  elements[0].classList.add('red');
  elements[0].classList.remove('green');
});

$('#stupidButton').click(function () {
  console.log('wtf');
  elements[0].classList.add('green');
  elements[0].classList.remove('red');
});
