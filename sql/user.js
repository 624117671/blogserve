var user = {
    login:"select * from users where account = ? and password = ?",
    insert:"insert into users (id,account,password,type,createTime,updateTime,staut) values(?,?,?,?,?,?,?)",
    
}
module.exports=user;