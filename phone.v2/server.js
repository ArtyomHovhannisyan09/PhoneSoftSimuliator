var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
app.get("/calculator", function (req, res) {
    res.sendFile(__dirname + "/calculator.html");
});

app.get("/time", function (req, res) {
    res.sendFile(__dirname + "/time.html");
});
app.get("/game", function (req, res) {
    res.sendFile(__dirname + "/game.html");
});
app.get("/instagram", function (req, res) {
    res.sendFile(__dirname + "/instagram.html");
});
const port = 3002
server.listen(port, () => {
    console.log('connected');
});