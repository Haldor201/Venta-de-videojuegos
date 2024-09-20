import mongoose from "mongoose";

export const conectar=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://calderonhaldor385:Vp9Szac8E3nvDEWZ@so.de31nf8.mongodb.net/');   
        console.log("Conectado");
    } catch (error) {
        console.log(error);
    }
}