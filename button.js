var five = require("johnny-five"),
  bumper, led;

five.Board().on("ready", function() {

  bumper = new five.Button(4);
  led = new five.Led(2);

  bumper.on("press", function() {

    led.on();

  }).on("release", function() {

    led.off();

  });
});
