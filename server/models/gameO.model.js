import mongoose from "mongoose";

const gamesoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    user:{
        //decimos que el tipo es un id de un usuario
        type:mongoose.Schema.Types.ObjectId,
        //hace referencia al modelo User
        ref:"User",
        required:true
    }
},{
    //para guardar la fecha 
    timestamps:true
})

//          nombre de la colección, se pone todo en miniscula y se agrega la "s" en la bd automaticamente
export default mongoose.model("GameO",gamesoSchema)