import mongoose from "mongoose";
/**
 * Cuando GitHub Actions ejecuta el workflow, las variables definidas en secrets se 
 * inyectan en process.env. No necesitas especificar nada más en tu código; simplemente
 * process.env.MONGO_DB_URL tendrá el valor que configuraste en el secreto del repositorio.
 */
export const conectar=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);   
        console.log("Conectado");
    } catch (error) {
        console.log(error);
    }
}