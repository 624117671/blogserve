var express = require('express');
var router = express.Router();
var db = require('../db/db');
var userSql = require("../sql/user");



// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: '操作失败'
		});
	} else {
		res.json(ret);
	}
};
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

router.get('/login', function(req, res, next) {
  console.log(res)
  var param = req.query || req.params;
  db.getConnection(function(err,conn){
    if (err) throw err;
    conn.query(userSql.login,[param.account,param.password],function(err,result){
        // 以json形式，把操作结果返回给前台页面
        jsonWrite(res, result);
        // 释放连接 
        conn.release();
    })
})
});

module.exports = router;
