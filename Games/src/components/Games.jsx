import { useAuth } from "../context/authcontext";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight, BsPerson } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
//Componentes
import Card from "./Card";
//Imagenes
import c1 from "../imgs/c1.png";
import c2 from "../imgs/c2.png";
import c3 from "../imgs/c3.png";
import c4 from "../imgs/c4.png";
import Mario from "../imgs/mariokart8.png";
import MarioL from "../imgs/mariokart8logo.png";
import f121 from "../imgs/f121.png";
import f121L from "../imgs/f12021logo.png";
import Spider from "../imgs/spiderman2.png";
import SpiderL from "../imgs/spidermanlogo.png";
import Switch from "../imgs/1-2switch.png";
import SwitchL from "../imgs/1-2_switchlogo.png";

export default function Home() {
  const { user, games,getGamesO } = useAuth();
  const navigate = useNavigate();
  const slides = [
    { url: c1 },
    { url: c2 },
    { url: c3 },
    { url: c4 }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-slate-950 text-white">
      <header className="bg-black text-white py-4 relative">
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-10">
          <span onClick={()=>{navigate("/Home")}} className="text-lg font-bold cursor-pointer">Inicio</span>
          <span onClick={()=>{navigate("/VideoGames")}} className="text-lg font-bold cursor-pointer">Videojuegos</span>
          <span onClick={()=>{navigate("/About")}} className="text-lg font-bold cursor-pointer">Sobre Level Up</span>
        </nav>
        <div onClick={() => { 
          getGamesO();
          navigate("/profile") }} className="cursor-pointer absolute top-4 right-4 flex items-center space-x-2">
          <BsPerson size={24} />
          <span>{user === null ? "null" : user.email}</span>
        </div>
      </header>

      <div className='h-[780px] w-full m-auto relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>

      <div className="flex pl-8 pr-8 contenedor-linea mt-16">
        <article className="recomendados">
          <img src={Mario} alt="Mario Kart 8" />
          <img src={MarioL} alt="Mario Kart 8 Logo" />
        </article>
        <article className="recomendados">
          <img src={f121} alt="F1 21" />
          <img src={f121L} alt="F1 21 Logo" />
        </article>
        <article className="recomendados">
          <img src={Spider} alt="Spider-Man 2" />
          <img src={SpiderL} alt="Spider-Man 2 Logo" />
        </article>
        <article className="recomendados">
          <img src={Switch} alt="1-2 Switch" />
          <img src={SwitchL} alt="1-2 Switch Logo" />
        </article>
      </div>

      <section id="sub-ten" className="overflow-hidden whitespace-nowrap">
        <div className="sub-ten">
          <span className="animado block animate-marquee">
            <br />
            <b>En tendencia - En tendencia - En tendencia - En tendencia - En tendencia - En tendencia</b>
            <br /><br />
          </span><br />
        </div>
      </section>

      <div>
        <section className="flex flex-wrap">
          {games.map((e, index) => (
            <Card key={index} data={e} />
          ))}
        </section>
      </div>
    </div>
  );
}
