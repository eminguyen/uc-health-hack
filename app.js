// Import libraries
const five = require("johnny-five");
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

var count = 0;
var soundIsOkay;

// Initializing Objects
const board = new five.Board();
var bumper, led, handlebarsObject,currColor, ledOn;

app.use(express.static(path.join(__dirname, 'public')));

// Render index.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000);

board.on("ready", function() {

  bumper = new five.Button(4);
  led = new five.Led(2);
  piezo = new five.Piezo(8);
  soundPlaying = false;
  ledOn = false;

  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: 7
  });

  bumper.on("press", function() {
    if(!ledOn) {
    io.sockets.emit('led');
      piezo.play({
        song: [
          ["E6", 1],
          ["C6", 1],
          ["E6", 1],
          ["C6", 1],

        ],
        tempo: 100
      })
      led.on();
      soundPlaying = true;
      ledOn = true;
    }
    else {
      io.sockets.emit('ledoff');
      led.off();
      soundPlaying = false;
      ledOn = false;
    }
  });/*.on("release", function() {
    io.sockets.emit('ledoff');
    led.off();
    soundPlaying = false;

  });*/

  var x = 0;
  proximity.on("data", function() {
    console.log("Proximity: ");
    console.log("  cm  : ", this.cm);
    console.log("  in  : ", this.in);
    console.log("-----------------");

    // Play sound if in range
    if (this.cm < 30 && this.cm > 10 && !piezo.isPlaying && !soundPlaying) {
      io.sockets.emit('soundon');
      piezo.play({
        song: [
          ["C6", 10],
        ],
        tempo:100
      });
    }

    else if (this.cm > 30 && !soundPlaying) {
      io.sockets.emit('soundoff');
      piezo.play({
        song: [
          [null, 1 / 4],
        ],
        tempo: 100
      });
    };
  });
});
