import { BsPerson } from 'react-icons/bs';
import { useAuth } from "../context/authcontext";
import { useNavigate } from "react-router-dom";
import User from "../imgs/User.png"
export default function ProfilePage() {
  const { user, gamesO,logoutP,getGamesO } = useAuth();
  const navigate = useNavigate();
  const cliclkLog=()=>{
    logoutP();
  }
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <header className="bg-black text-white py-4 relative">
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-10">
          <span onClick={() => { navigate("/Home") }} className="text-lg font-bold cursor-pointer">Inicio</span>
          <span onClick={() => { navigate("/VideoGames") }} className="text-lg font-bold cursor-pointer">Videojuegos</span>
          <span onClick={() => { navigate("/About") }} className="text-lg font-bold cursor-pointer">Sobre Level Up</span>
        </nav>
        <div onClick={() => { 
          getGamesO();
          navigate("/profile") }} className="cursor-pointer absolute top-4 right-4 flex items-center space-x-2">
          <BsPerson size={24} />
          <span>{user === null ? "null" : user.email}</span>
        </div>
      </header>
      <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex items-center p-8">
          <img className="w-1/5 rounded-full" src={User} alt="User Icon" />
          <div className="ml-4">
            <p className="font-mono text-xl">Usuario: {user.email}</p>
            <button
            onClick={cliclkLog}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className='font-serif text-6xl'>Juegos Comprados</h1>
        <div className='flex'>
          {gamesO.map((game, index) => (
            <div key={index} onClick={()=>{alert("Tu codigo es: "+game._id )}} className="cursor-pointer w-1/6 h-[17rem] min-h-[5rem] m-3 text-center rounded-lg items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 overflow-y-auto">
              <p className='bg-emerald-300 text-black'>{game.title}</p>
              <p  >{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
