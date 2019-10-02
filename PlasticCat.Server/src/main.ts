"use strict";
import express from 'express';
import open from 'open';
import { ClientsRepo } from './repos/clients.repo';
import { SettingsRepo } from './repos/settings.repo';
import { AppConfig } from './app.config';
import { OrdersRepo } from './repos/orders.repo';


var port = 3000;
var APP_FOLDER = './app/client';
var app = express();

// Static files
// app.get('*.*', express.static(APP_FOLDER, { maxAge: '1y' }));
app.get('*.*', express.static(APP_FOLDER));
app.use(express.json());
// TODO add routes
ClientsRepo(app);
new SettingsRepo(app);
new OrdersRepo(app);

// ---- SERVE APLICATION PATHS
// app.get(/(?!api)\/.*/, function (req, res) {
    app.get('*', function (req, res) {
    // console.log('hit root')
    res.status(200).sendFile(`/`, { root: APP_FOLDER });
});

app.listen(port, function listenFn(error) {
    if (error !== undefined) {
        console.log(error);
    }
    else {
        const path = `http://localhost:${port}`;
        // open(path);
        console.log(`Started Server at ${path}`);
    }
});

