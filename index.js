const express = require ( "express") ; 

const app = express() ; 
const db = require ( "./db")
app.set ( "view engine" , "hbs") ; 

app.get ( "/" , (req, res)=>{
    return  res.redirect("index") ; 
})
app.get ( "/index", (req, res)=>{
    return res.render ( "index") ; 
})
app.listen ( 2424 , ()=>{
    console.log("server started on http://localhost:2424") ; 
})