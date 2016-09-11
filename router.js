'use strict'

const express = require('express');
const router = express.Router();

const foodindex = require('./rest/gateway/foodindex/foodindex');

router.use('foodindex', foodindex);

module.exports = router;