'use strict'

const express = require('express');
const apicache = require('apicache').options({debug: true}).middleware;;
const router = express.Router();
const _ = require('underscore');
const scrapper = require('./foodsubindex_scrapper');

router.get('/caipufenlei', (req, res) => {
    let url = req.headers.url;

    if(!url){
    	res.status(400).send("missing header param url");
    }

    var promise = new Promise((resolve, reject) => {
		scrapper.getSubindex(url, resolve, reject);
    });

    promise.then((data) => {
    	res.status(200).send(data);
    }).catch(() => {
    	res.status(500).send();
    });
})

module.exports = router;