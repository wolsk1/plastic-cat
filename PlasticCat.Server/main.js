"use strict";
var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var APP_FOLDER = '../wwwroot';
var app = express();

// Static files
app.get('*.*', express.static(APP_FOLDER, {maxAge: '1y'}));

// ---- SERVE APLICATION PATHS
app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: APP_FOLDER});
});

app.listen(port, function listenFn(error) {
    if(error !== undefined){
        console.log(error);
    }
    else {
        open('http://localhost:'+ port);
    }
})