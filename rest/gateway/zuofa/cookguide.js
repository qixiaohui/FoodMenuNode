'use strict'

const express = require('express');
const apicache = require('apicache').options({debug: true}).middleware;;
const router = express.Router();
const _ = require('underscore');
const scrapper = require('./cookguide_scrapper');

router.get('/zuofa', apicache('1 day'), (req, res) => {
    req.apicacheGroup = req.headers.url;
    let url = req.headers.url;

    if(!url){
    	res.status(400).send("missing header param url");
    }

    var promise = new Promise((resolve, reject) => {
		scrapper.getCookGuide(url, resolve, reject);
    });

    promise.then((data) => {
    	res.status(200).send(data);
    }).catch(() => {
    	res.status(500).send();
    });
})

module.exports = router;