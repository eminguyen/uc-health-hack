var socket;

socket = io();

var elements = document.getElementsByClassName("whitney");

socket.on('led', function() {
  elements[0].classList.add('red');
  elements[0].classList.remove('purple');
  elements[0].classList.remove('green');
  elements[0].classList.remove('orange');
  elements[0].classList.remove('yellow');
});

socket.on('calldoctor', function() {
  elements[0].classList.add('purple');
  elements[0].classList.remove('red');
  elements[0].classList.remove('green');
  elements[0].classList.remove('yellow');
  elements[0].classList.remove('orange');
});

socket.on('tookmedication', function() {
  elements[0].classList.add('orange');
  elements[0].classList.remove('red');
  elements[0].classList.remove('green');
  elements[0].classList.remove('purple');
  elements[0].classList.remove('yellow');
})

socket.on('answerdoctor', function() {
  elements[0].classList.add('yellow');
  elements[0].classList.remove('red');
  elements[0].classList.remove('green');
  elements[0].classList.remove('purple');
  elements[0].classList.remove('orange');
})

socket.on('soundoff', function() {
  elements[0].classList.add('green');
  elements[0].classList.remove('red');
  elements[0].classList.remove('purple');
  elements[0].classList.remove('orange');
  elements[0].classList.remove('yellow');
});

$('#stupidButton').click(function () {
  elements[0].classList.add('green');
  elements[0].classList.remove('red');
  elements[0].classList.remove('purple');
  elements[0].classList.remove('orange');
  elements[0].classList.remove('yellow');
});
