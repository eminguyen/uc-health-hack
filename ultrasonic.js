var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: 7
  });

  var piezo = new five.Piezo({
    pin: 8,
  })

  var x = 0;
  proximity.on("data", function() {
    console.log("Proximity: ");
    console.log("  cm  : ", this.cm);
    console.log("  in  : ", this.in);
    console.log("-----------------");

    // Play sound if in range
    if (this.cm < 30 && this.cm > 10 && !piezo.isPlaying) {
      piezo.play({
        song: [
          ["C2", 1 / 4],
        ],
        tempo: 100
      })
    }

    else if (this.cm > 30) {
      piezo.play({
        song: [
          [null, 1 / 4],
        ],
        tempo: 100
      });
    };
  });
});
