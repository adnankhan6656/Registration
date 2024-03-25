const mysql=require("mysql");

const dbConn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Adnan@192426',
    database :'job_application_06_03_2024',
    multipleStatements:true,
    port:3306})
module.exports=dbConn;