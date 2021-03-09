//orders.js
//Author: Haley Welliver

var express = require('express');
var router = express.Router();
var dbms = require('./dbms.js');

/* USE users listing. */
router.use(express.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});

/* POST users listing. */
router.post('/', function(req, res, next) {   
   var month = req.body.month;  //dbms.dbquery.month;

   //query to get plain cheesecake quantity for month clicked
   dbms.dbquery("SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH='" + month + "' AND TOPPING='plain'").then(function(plainData){
      var quantity = plainData[0]["SUM(QUANTITY)"]
      console.log("quantity: " + quantity);
      if(!quantity){
         quantity = 0;
      }
      data[0]["quantity"] = quantity;
    });
    
    //query to get cherry cheesecake quantity for month clicked
    dbms.dbquery("SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH='" + month + "' AND TOPPING='cherry'").then(function(cherryData){
       var quantity = cherryData[0]["SUM(QUANTITY)"]
       console.log("quantity: " + quantity);
       if(!quantity){
          quantity = 0;
       }
       data[1]["quantity"] = quantity;
     });
    
     //query to get chocolate cheesecake quantity for month clicked
     dbms.dbquery("SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH='" + month + "' AND TOPPING='chocolate'").then(function(chocolateData){
       var quantity = chocolateData[0]["SUM(QUANTITY)"]
       console.log("quantity: " + quantity);
       if(!quantity){
          quantity = 0;
       }
       data[2]["quantity"] = quantity;
     });

   res.json(data);
});       

 var data = [
   {
      "topping": "plain", 
      "quantity": 2
   },
   {
      "topping": "cherry", 
      "quantity": 3
   },
   {
      "topping": "chocolate", 
      "quantity": 7
   }
 ];

module.exports = router;