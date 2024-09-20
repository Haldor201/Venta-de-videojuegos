//los middlewares son funciones que se ejecutan antes que se lleguen a una ruta
import jwt  from "jsonwebtoken";
import {tokenSecret} from "../config.js";
//funcion para validar un usuario
//                    "next"continua si hay un token
//si no se ejecuta el next() no se podra seguir con el codigo de la ruta
export const authRequired=(req,res,next)=>{
    //cuando se hace un login, se puede guardar el token en la cookie, asi como
    //cuando hace un register y podemos traerlo aqui
    const {token}=req.cookies;
    
    if(!token)
        return res.status(401).send(["No Autorizado"])

    //verificar si es un token que generamos
    jwt.verify(token,tokenSecret,(error,decode)=>{
        if(error) 
            return res.status(403).json({"Message":"Token Invalido"})
        //el token al se decodificado tiene el id del usuario, entonces lo guardamos en la petición
        req.user=decode;
        next();
    });
}