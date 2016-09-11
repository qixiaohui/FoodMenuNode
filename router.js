'use strict'

const express = require('express');
const router = express.Router();

const foodindex = require('./rest/gateway/caipudaquan/foodindex');
const foodsubindex = require('./rest/gateway/caipufenlei/foodsubindex');
const cookguide = require('./rest/gateway/zuofa/cookguide');

router.use('/foodindex', foodindex);
router.use('/foodsubindex', foodsubindex);
router.use('/cookguide', cookguide);

module.exports = router;