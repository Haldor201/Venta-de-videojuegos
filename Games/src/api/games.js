import axios from "./axios.js"

export const allGamesRequest=()=> axios.get(`/api/games/allgames`)
export const allGamesPRequest=()=> axios.get(`/api/games/allgamesP`)
export const buyGameRequest=(game)=> axios.post(`/api/games/buygame`,game)
// Se codifica el valor pasado por los parámetros para evitar errores, por ejemplo: Play%Station
export const allGamesTypeRequest = (Type) => {
    return axios.get(`/api/games/allgamesT/${encodeURIComponent(Type)}`);
};