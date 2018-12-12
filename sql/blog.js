var blog = {
    selectbytype: "select blogId, author,introduction,title,updateTime from blogs (SELECT COUNT(1) from blogs WHERE atype=?) as count where type = ? LIMIT ?,?",
    selectbyid: "select * from blogs where id = ?",
    insert: "insert into blogs (id,title,author,content,type,title,createTime,updateTime,introduction,like,status) values(?,?,?,?,?,?,?,?,?,?,?)",
    update: "update blogs set title=?,author=?,content=?,type=?,updateTime=?,introduction=?,like=?,status=? where id = ?",
    setstatus: "update blogs set status=? where id=?",
    setlike: "update blogs set like=? where id=?"
}
module.exports=blog;