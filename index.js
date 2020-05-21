var app = require('express')();
var http = require('http').createServer(app);
const mqtt = require('./mqtt').default
const GPIO = require('./gpio').default
 
app.Interval = setInterval(async function() {
  data2 = GPIO.readInputs
  }, 1000)
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
http.listen(3000, () => {
  console.log('listening on *:3000');
});



 






