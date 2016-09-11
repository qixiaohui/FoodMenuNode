'use strict'

const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const logger = require('morgan');
const router = require('./router');
const port = 8080;

const app = express();
app.use(cors());
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extend: true
}));
app.enable('trust proxy');
app.use(router);

app.listen(process.env.PORT || port, function(){
	console.log("server listening on port: "+(process.env.PORT || port));
});
