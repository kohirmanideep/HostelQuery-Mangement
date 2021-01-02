// this js is for the localhost:1000/auth/... will be sent here from app.js

const express = require('express')//node_module express
const router = express.Router()//intilizing the node_module_express

//intial page i.e.., index.hbs
router.get('/',function(req,res){
    console.log("home page accessed!!!")
    res.render('index')
})
//starting the index page


//when form button is clicked the dataget send over here from admin.hbs
const authController = require('../controllers/auth') //importing the file auth.js from controllers 
    router.post("/register", authController.register);// we already have /auth from app.js now completing the __dir as register
    //we need to save the data so, mysql commands are done in .register fun in auth,js in controllers
    //res.send("<h1>hello</h1>")
    //res.render("admin")
router.post("/slogin",authController.slogin)
router.post("/Queryregister",authController.Queryregister)
router.post("/data",authController.data)
router.post("/lol",authController.lol)
router.post("/status",authController.status)
module.exports=router; //exporting the auth.js(this file make's public)