import { useState } from 'react';
import Game from './Game';

const Card = ({ data }) => {
  const [isGameOpen, setGameOpen] = useState(false);

  const handleOpenGame = () => {
    setGameOpen(true);
  };

  return (
    <>
      <div onClick={handleOpenGame} className="cursor-pointer w-1/4 m-3 text-center flex items-center justify-center image-container">
        <img className="w-full h-full" src={data.imgs[0]} alt={data.title} />
        <span className="overlay">{data.title}</span>
      </div>
      {isGameOpen && <Game data={data} onClose={() => setGameOpen(false)} />}
    </>
  );
};

export default Card;
