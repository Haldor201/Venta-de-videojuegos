import { useState } from "react";
import { useAuth } from "../context/authcontext";
const Game = ({ data, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(data.imgs[0]);
  const {buy}=useAuth();
  const onClickG=()=>{
    const game={title:data.title,
      description:data.description,
      price:data.price,};
      buy(game)
  }
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative max-w-3xl w-full mx-4">
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-gray-400"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-white mb-4">{data.title}</h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-center md:w-1/2">
            <div className="w-full mb-4">
              <img src={selectedImage} alt="Selected" className="w-full h-64 object-cover" />
            </div>
            <div className="flex mt-4 space-x-2">
              {data.imgs.map((image, index) => (
                <button key={index} onClick={() => setSelectedImage(image)} className="focus:outline-none">
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-20 h-20 object-cover border-2 border-transparent hover:border-blue-500" />
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 md:w-1/2">
            <p className="text-lg text-gray-300 mb-4">{data.description}</p>
            <p className="text-xl font-semibold text-white mb-4">${data.price}</p>
            <button onClick={onClickG} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
