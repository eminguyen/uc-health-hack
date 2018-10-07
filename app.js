<<<<<<< Updated upstream
// Import libraries
const five = require("johnny-five");
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

var count = 0;

// Initializing Objects
const board = new five.Board();
var bumper, led, handlebarsObject,currColor;

app.use(express.static(path.join(__dirname, 'public')));

// Render index.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
=======
var five = require("johnny-five");
var board = new five.Board();
>>>>>>> Stashed changes

server.listen(3000);

board.on("ready", function() {
<<<<<<< Updated upstream

  bumper = new five.Button(4);
  led = new five.Led(2);

  bumper.on("press", function() {
    io.sockets.emit('led');
    led.on();

  }).on("release", function() {
    io.sockets.emit('ledoff');
    led.off();

  });
=======
  var led = new five.Led(2);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led
  });

  led.blink();
>>>>>>> Stashed changes
});
