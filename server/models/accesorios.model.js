import mongoose from "mongoose";

const AccesoriosSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imgs:{
        type:Array,
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
    }
},{
    //para guardar la fecha 
    timestamps:true
})

//          nombre de la colección, se pone todo en miniscula y se agrega la "s" en la bd automaticamente
export default mongoose.model("Accessories",AccesoriosSchemaSchema)