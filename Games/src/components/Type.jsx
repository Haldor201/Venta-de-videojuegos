import { useAuth } from "../context/authcontext";
import { useNavigate } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import Card from "./Card";
import { useEffect } from "react";
export default function Type() {
    const navigate = useNavigate();
  const { type,getGamesT,gamesT,getGamesO,user } = useAuth();
  useEffect(()=>{
    getGamesT(type)
  },[])
  return (
    <div>
      <header className="bg-black text-white py-4 relative">
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-10">
          <span
            onClick={() => {
              navigate("/Home");
            }}
            className="text-lg font-bold cursor-pointer"
          >
            Inicio
          </span>
          <span
            onClick={() => {
              navigate("/VideoGames");
            }}
            className="text-lg font-bold cursor-pointer"
          >
            Videojuegos
          </span>
          <span
            className="text-lg font-bold cursor-pointer"
            onClick={() => {
              navigate("/About");
            }}
          >
            Sobre Level Up
          </span>
        </nav>
        <div
          onClick={() => {
            getGamesO();
            navigate("/profile");
          }}
          className="cursor-pointer absolute top-4 right-4 flex items-center space-x-2"
        >
          <BsPerson size={24} />
          <span>{user === null ? "null" : user.email}</span>
        </div>
      </header>
      <h1 className="font-extrabold text-6xl">
        {type == "" ? "Elije un tipo de juegos" : type}
      </h1>
      <div>
        <section className="flex flex-wrap">
          {gamesT.map((e, index) => (
            <Card key={index} data={e} />
          ))}
        </section>
      </div>
    </div>
  );
}
