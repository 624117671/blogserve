var mysql=require('mysql');
var $conf=require('./dbConfig.js');

module.exports = mysql.createPool( $conf.mysql);
