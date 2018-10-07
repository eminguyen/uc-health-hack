var five = require("johnny-five"),
  bumper, led;

five.Board().on("ready", function() {

  bumper = new five.Button(4);
  led = new five.Led(2);
  piezo = new five.Piezo(8);


  bumper.on("press", function() {
    led.on();
    piezo.play({
      song: [
        ["E4", 1],
        ["C4", 1],
        ["E4", 1],
        ["C4", 1],

      ],
      tempo: 100
    })

  }).on("release", function() {

    led.off();


  });
});
