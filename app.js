
// Import libraries
const five = require("johnny-five");
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

// Initializing Objects
const board = new five.Board();
const app = express();

// Express setup to utilize handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Express set port
app.listen(3000, "0.0.0.0", function () {
  console.log('Listening on Port 3000!' + app.get('port'))
});

app.use(express.static("public"));
// Render template when root is visited
app.get('/', function(req, res) {
  res.render('home');
});

board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led({
    pin: 2
  });

  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe();
});
