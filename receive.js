#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
const express = require('express');
const app = express();
app.get('/receive', function(req, res) {
amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello';

    ch.assertQueue(q, {durable: false});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, function(msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
  });
});
});

app.listen(3008, function() {
  console.log('listening on 3008')
})

