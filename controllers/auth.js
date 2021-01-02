
//Creating connect for mysql database
const mysql = require("mysql");
//const conn = require('../database')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'dbmsproject'
});
//connection made with dbms project

//testing
function inserdata(name,data){
    let sql = 'insert into register values("'+name+'","'+data+'")'
    db.query(sql,function(err){if(err){console.log(err)}else{console.log('saved')}})
}
function getdata(){
    let sql='select*from register;'
    db.query(sql,function(err,result){if(err){console.log(err)}else{console.log(result)}})
}
//test end!
//saving the data in the register table
exports.register = function(req,res) // sending this data/program to auth.js in routes 
{
console.log(req.body)
const name = req.body.name
const email = req.body.email
db.query('insert into register set ?',{name: name, email: email},
function(err,result){
    if(err){console.log(err)}
        else{
            console.log(result)
            res.render('admin',{message:'admin register'})
        }

})
//res.render('student',{message:name,hello:email})
}
exports.Queryregister = function(req,res) // sending this data/program to auth.js in routes 
{//start
//console.log(uname)
console.log(req.body)
const rg_no = req.body.rg_no
const sub = req.body.sub
const prblm = req.body.prblm
const act = req.body.act
const other = req.body.other
console.log("the input from problem",rg_no,sub,prblm,act,other)
//let abc = " queryregister;"
let sql = "insert into queryregister values(NULL,'"+rg_no+"','"+sub+"','"+prblm+"','"+act+"','"+other+"','none');"
db.query(sql,
function(err,result)
            {console.log(sql)
    if(err){console.log(err)}
        else{
            console.log(result)
            //console.log(result)
            //console.log('problem saved',uname)
            //res.render('Queryregister',{prblm:'problem submitted'})
        }
            }
)
let id = "select id from queryregister where problem='"+prblm+"';"
db.query(id,function(err,result){
    console.log(result)
    if(err){console.log(err)}
    else{
        for(let i=0;i<result.length;i++){
            const id = result[i].id
            console.log(id)
            res.render('Queryregister',{message:''})
        }
    }
})
}


exports.data = function(req,res,next){
    var sql = "select * from queryregister"
    db.query(sql, function(err,data,fields){
        if(err){console.log(err)}
         res.render("data",{title: 'userlist', userData:data})
    })
 }


//data saved in register and dialog showed!!
exports.slogin = function(req,res){
console.log(req.body)
const uname = req.body.uname
const pswd = req.body.pswd

console.log("the input given by use ",uname,pswd)
let sql = "select * from slogin where uname=? and pswd=?"
db.query(sql,[uname,pswd],function(err,result)
{
    if(err){console.log(err)}
    for(let i=0;i<result.length;i++){
        console.log('db result',result[i].uname,result[i].pswd)
        if(result[i].uname==uname && result[i].pswd==pswd)
        {
            console.log("access granted!!")
            res.render('Queryregister',{message:uname})
            // res.redirect('Queryregister',{message:username})
            //res.render('slogin',{message:'logined'})
        }
        
    }

})
return uname
}



exports.lol = function(req,res,next){
const id = req.body.id
const op = req.body.exampleRadios
console.log(id,op)
    if(op=="Resloved")
        {var qr = "delete from queryregister where id="+id+""
            db.query(qr,function(err){if(err){console.log(err)}
            else{console.log("deleted")
            res.render('lol') }})
        }
    var sql = "update queryregister set status='"+op+"' where id="+id+""
        db.query(sql,function(err){if(err){console.log(err)}else{console.log("updated")}})
    res.render('lol')
}

/*exports.status = function(req,res,next){
    const rg_no = req.body.rg_no
    console.log(rg_no)
    var sql = "select rg_no,problem,status from queryregister where rg_no="+rg_no+";"
    db.query(sql, function(err,data,fields){
        if(err){console.log(err)}
         res.render("data",{title: 'userlist', userData:data})
    })
}*/
exports.status = function(req,res,next){
    const rg_no = req.body.rg_no
    console.log(rg_no)
    var sql = "select rg_no,problem,status from queryregister where rg_no='"+rg_no+"'"
    db.query(sql, function(err,data,fields,result){
        if(err){console.log(err)}
        //else{console.log((result))}
         res.render("status",{title: 'userlist', userData:data})
    })
 }
