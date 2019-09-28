const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/node-mongoapi",{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,},(error)=>{

if(!error){
console.log("connection succeded")
}
else{
    console.log("connection failed")
}
})

const User=require("./users.model")

