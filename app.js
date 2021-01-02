const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config({path: './.env'})
const app = express();
//db connection for dbms project
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'dbmsproject'
});
const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory))
// reciving the form html page
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// recived
console.log(__dirname)// directory for the public editor
app.set('view engine','hbs');
app.set('view engine','ejs');
//throwing the exception
db.connect((error) =>{
    if(error){console.log(error)}
    else{console.log("MySql connected!!!")}
})
//done exception

//defining the routes (pages.js)
app.use('/',require('./routes/pages'))//goin to direectory in routes
app.use('/auth',require('./routes/auth'))//goin to direectory in routes
//sent all requesting to routes for better accessbility


//hosting and listen on 1000 port
app.listen(1000, () =>{
    console.log("server started on 1000")
})