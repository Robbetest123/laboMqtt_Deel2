var app = require('express')();
const GPIO = require('./gpio').default
var mqtt = require('mqtt')
 
var client  = mqtt.connect('ws://test.mosquitto.org:8080/ws')
 
client.on('connect', function () {
  client.subscribe('CHANGE_DETECTED', function (err) {
    if (!err) {
      client.publish('CHANGE_DETECTED', 'Hello from robbe pi')
    }
  })
})
 
GPIO.mypin.watch(function(err, value) {
  client.publish('CHANGE_DETECTED', JSON.stringify(value))
 
  });