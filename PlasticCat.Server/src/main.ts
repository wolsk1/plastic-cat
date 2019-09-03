"use strict";
import express from 'express';
import open from 'open';
import { clientsRepo } from './repos/clients.repo';
import { SettingsRepo } from './repos/settings.repo';

var port = 3000;
var APP_FOLDER = './app/client';
var app = express();

// Static files
// app.get('*.*', express.static(APP_FOLDER, { maxAge: '1y' }));
app.get('*.*', express.static(APP_FOLDER));

// ---- SERVE APLICATION PATHS
app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, { root: APP_FOLDER });
});

app.listen(port, function listenFn(error) {
    if (error !== undefined) {
        console.log(error);
    }
    else {
        const path = `http://localhost:${port}`;
        open(path);
        console.log(`Started Server at ${path}`);
    }
});

// TODO add routes
clientsRepo(app);
new SettingsRepo(app);