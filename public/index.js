var socket;

socket = io();

var elements = document.getElementsByClassName("whitney");

socket.on('led', function() {
  elements[0].classList.add('red');
  elements[0].classList.remove('purple');
  elements[0].classList.remove('green');
});

socket.on('soundon', function() {
  elements[0].classList.add('purple');
  elements[0].classList.remove('red');
  elements[0].classList.remove('green');
});

socket.on('soundoff', function() {
  elements[0].classList.add('green');
  elements[0].classList.remove('red');
  elements[0].classList.remove('purple');
});

$('#stupidButton').click(function () {
  elements[0].classList.add('green');
  elements[0].classList.remove('red');
  elements[0].classList.remove('purple');
});
