const mongoose=require("mongoose")

const DB="mongodb+srv://crudcloud:crudcloud@cluster0.zskewzm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB,{
   
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    try{
        console.log("connection start");
    }
    catch(e){
        console.log("error:",e)
    }
})