import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import { BsPerson } from "react-icons/bs";
import Nintendo from "../imgs/nintendoFoto.png";
import ps from "../imgs/psFoto.png";
import xbox from "../imgs/xboxFoto.png";
import pc from "../imgs/pcFoto.png";
export default function videogames() {
  const { user,getGamesO,setTypeG } = useAuth();
  const navigate = useNavigate();
  const handleClick = (event) => {
    const span = event.currentTarget.querySelector('.overlay');
    if (span) {
      setTypeG(span.innerText);
    }
    navigate('/Type')
  };
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
          <span className="text-lg font-bold cursor-pointer" onClick={() => {
              navigate("/About");
            }}>
            Sobre Level Up
          </span>
        </nav>
        <div
          onClick={() => { 
          getGamesO();
          navigate("/profile") }}
          className="cursor-pointer absolute top-4 right-4 flex items-center space-x-2"
        >
          <BsPerson size={24} />
          <span>{user === null ? "null" : user.email}</span>
        </div>
      </header>
      <div className="flex">
        <div onClick={handleClick} className="image-container cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <img src={Nintendo} alt="Imagen 1" />
          <span className="overlay">Nintendo</span>
        </div>
        <div onClick={handleClick} className="image-container cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <img src={ps} alt="Imagen 2" />
          <span className="overlay">Play Station</span>
        </div>
        <div onClick={handleClick} className="image-container cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <img src={xbox} alt="Imagen 3" />
          <span className="overlay">Microsoft Xbox</span>
        </div>
        <div onClick={handleClick} className="image-container cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <img src={pc} alt="Imagen 4" />
          <span className="overlay">PC</span>
        </div>
      </div>
    </div>
  );
}
