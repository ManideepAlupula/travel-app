var mysql = require('mysql');
const express = require('express')

const app = express.Router();


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password@123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});




//post api register

Router.post('/register',(req,res,next)=>{
  let userid = userid
  password = password
  reenterpassword = reenterpassword
  mobile=mobile

  var body = [
    req.body.userid,
    req.body.password,
    req.body.reenterpassword,
    req.body.mobile
  ]

  let query = 'INSERT INTO `new_table` SET ?'
  con.query(query,body,(err,rows)=>{
    if(!err){
      res.send(rows)
    }
    else{
      res.send(err)
    }
  })
})  