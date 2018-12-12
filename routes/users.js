var express = require('express');
var router = express.Router();
var db = require('../db/db');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function(req, res, next) {
  console.log(res)
  db.query(`SELECT * FROM civilregionalism where CIVILREGIONAL = 2`, (qerr,vals,fields)=>{
    
		let rows = JSON.stringify(vals);
		res.send(rows)
	})
});

module.exports = router;
