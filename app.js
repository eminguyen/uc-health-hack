var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function(){
  var led = new five.Led({
      pin:13
  });
  led.blink(5000);
});
