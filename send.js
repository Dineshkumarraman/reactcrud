#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
const express = require('express');
const app = express();
	app.get('/send', function(req, res) {
amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
  
    var q = 'hello';
    var msg = 'Hello World! dudeDD';

    ch.assertQueue(q, {durable: false});
    // Note: on Node 6 Buffer.from(msg) should be used
    ch.sendToQueue(q, new Buffer(msg));
    console.log(" [x] Sent %s", msg);
 	res.send(msg);
  });
 
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});
 });

app.listen(3009, function() {
  console.log('listening on 3009')
})
