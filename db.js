const mongoose = require ("mongoose") ; 
mongoose.connect ("mongodb://localhost:27017/revision-2" , {
    useNewUrlParser:true , 
    useUnifiedTopology: true
})   ; 
const db = mongoose.connection ; 

db.on("error" , ()=>{
    console.log("Error while connecting with db....")  ; 
})
db.once('open' , ()=>{
    console.log("successfully connected Db ")  ; 
})