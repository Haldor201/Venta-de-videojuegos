import mongoose from "mongoose";
//Esquema que usaremos para guardar datos en mongodb

//Limpiar los espacios que nos pasan el los strings: trim:true
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        uniqued:true
    },
    password:{
        type:String,
        required:true,
    }
},{
    //para guardar la fecha 
    timestamps:true
})

//          nombre de la colección, se pone todo en miniscula y se agrega la "s" en la bd automaticamente
export default mongoose.model("User",userSchema)