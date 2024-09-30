/*
  File name: user.js
  Student Name: Son Vu
  Student ID: 301366093
  Date: 29 Sep
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
