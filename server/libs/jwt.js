import {tokenSecret} from "../config.js";
import jwt from "jsonwebtoken";
//DEVUELVE UN TOKEN

export function token(payload){
    return new Promise((res,rej)=>{
        //creamos un token para darle al usuario un tiempo limitado de uso
        jwt.sign(
        payload,//payload es un objeto con el id del user
        tokenSecret,
        {
            expiresIn:"1d"
        },(error,token)=>{
            if(error) rej(error);
            res(token)
        })
    })
}