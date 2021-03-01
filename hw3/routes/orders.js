//orders.js
//Author: Haley Welliver

var express = require('express');
var router = express.Router();

var data = [
  {
    topping: "cherry",
    quantity: 2,
  },
  {
    topping: "plain",
    quantity: 6,
  },
  {
    topping: "chocolate",
    quantity: 3,
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;