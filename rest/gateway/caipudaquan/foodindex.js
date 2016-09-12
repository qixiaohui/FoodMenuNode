'use strict'

const express = require('express');
const apicache = require('apicache').options({debug: true}).middleware;;
const router = express.Router();
const _ = require('underscore');
const scrapper = require('./foodindex_scrapper');

router.get('/caipudaquan', apicache('1 day'), (req, res) => {
    //let index = req.params.index;

    let promise = new Promise((resolve, reject) => {
    	scrapper.getIndex(resolve, reject);
    });

    promise.then((data) => {
		res.status(200).send(data);
    }).catch(() => {
    	res.status(500).send();
    });
});

module.exports = router;