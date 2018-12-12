var express = require('express');
var router = express.Router();
var db = require('../db/db');
var blogssql = require("../sql/blog");
var common = require("../util");
var uuid = require("uuid/v1")
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

//根据类型查询博客
router.get('/selectbytype', function(req, res, next) {
    var param = req.query || req.params;
    db.getConnection(function(err,conn){
        if (err) throw err;
        conn.query(blogssql.selectbytype,[param.type,param.type,pageStart,pageEnd],function(err,result){
            // 以json形式，把操作结果返回给前台页面
            jsonWrite(res, result);
            // 释放连接 
            conn.release();
        })
    })
  });

  //添加博客
  router.post('/insert',function(req, res, next){
    var param = req.query || req.params;
    var createTime = common.getCurrentDate(2);
    db.getConnection(function(err,conn){
        if(err) throw;
        conn.query(blogssql.insert,[],function(){
            jsonWrite(res, result);
            conn.release();
        })
    })
  })
