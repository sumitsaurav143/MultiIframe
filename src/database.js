//const oracledb=require('oracledb');
const mysql=require('mysql');
const express=require('express');
//const { dbObjectAsPojo } = require('oracledb');
var app=express();

// var db_config = {
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'training'
//   // host: '10.184.232.113',
//   // port:'1521',
//   // user: 'DEVBCV_COMUSER',      
//   // password: 'DEVBCV_COMUSER', 
//   // database: 'PRTYDLD2'
// };

// var connection;

// function handleDisconnect() {
//   connection = mysql.createConnection(db_config); 
                                                  

//   connection.connect(function(err) {              
//     if(err) {                                    
//       console.log('error when connecting to db:', err);
//       setTimeout(handleDisconnect, 2000); 
//     }                     
//     else
//     console.log("DATABASE CONNECTED!!")               
//   });                                   
                                  
//   connection.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
//       handleDisconnect();                        
//     } else {                                     
//       throw err;                               
//     }
//   });
// }

// handleDisconnect();

var db=mysql.createConnection({
     host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'labelchecker'
});


db.connect(function(err){
  if(err) throw err;
  console.log("db connected")
  //fetchData();
})

app.get('/',function(req,res){
  fetchData(res);
  console.log("Done");
});

function executeQuery(sql,cb){
  console.log("Fetching function started....");
 
  db.query(sql,function(err,res,fields){
      if(err) throw err;
      cb(res)
    });
 
}

function fetchData(res){
  console.log("Fetching started....");
  executeQuery("select * from brand_id_fe where f_id='aa'", function(_res){
    console.log(_res);
    if(_res.length)
    console.log("NO DATA");
    res.write('<table><tr>');
    for(var col in _res[0]){
      res.write('<b><td>'+col+'</td></b>');
    }
    res.write('</tr>');

    for(var row in _res){
      res.write('<tr>');
      for(var col in _res[row]){
        res.write('<td>'+_res[row][col]+'</td>');
      }
      res.write('</tr>');
    }
    res.write('</table>');
  });
  executeQuery("select * from frontend_id where f_id='aa'", function(_res){
    console.log(_res);
    if(_res.length)
    console.log("NO DATA");
    res.write('<table><tr>');
    for(var col in _res[0]){
      res.write('<b><td>'+col+'</td></b>');
    }
    res.write('</tr>');

    for(var row in _res){
      res.write('<tr>');
      for(var col in _res[row]){
        res.write('<td>'+_res[row][col]+'</td>');
      }
      res.write('</tr>');
    }
    res.write('</table>');
  });
}

app.listen(9090,function(){
  console.log('listning to port 9090');
})

// var conn = oracledb.getConnection({
//   host: '10.1.53.5', // Replace with your host name
//   user: 'suser',      // Replace with your database username
//   password: 'suser',      // Replace with your database password
//   database: 'realdata' // // Replace with your database Name
// }); 
 
//console.log('Database is connected successfully !');
//export default conn;