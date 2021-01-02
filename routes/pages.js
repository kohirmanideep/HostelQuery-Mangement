const express = require('express')
const router = express.Router()
router.get('/',function(req,res){
    console.log("home page accessed!!!")
    res.render('index')
})
var x = 'amigoooo'
router.get("/admin",(req,res) => {
    //res.send("<h1>hello</h1>")
    res.render("admin",{message:x})
    console.log("admin page accessed!!!")
});
router.get("/student",(req,res) => {
    //res.send("<h1>hello</h1>")
    res.render("student")
    console.log("student login page accessed !!!")
});
router.get("/Queryregister",(req,res) => {
    //res.send("<h1>hello</h1>")
    res.render("Queryregister")
    console.log("Queryregister page accessed!!!")
});
router.get("/slogin",(req,res) => {
    //res.send("<h1>hello</h1>")
    console.log("student login page accessed page accessed!!!")
    res.render("slogin")
});
router.get("/data",(req,res) => {
    //res.send("<h1>hello</h1>")
    res.render("data")
    console.log("data page accessed page accessed!!!")

});
router.get("/lol",(req,res) => {
    //res.send("<h1>hello</h1>")
    res.render("lol")
    console.log("lol page accessed page accessed!!!")

});
router.get("/s_status",(req,res) => {
    //res.send("<h1>hello</h1>")
    res.render("s_status")
    console.log("s_status page accessed!!!")

});
module.exports=router;