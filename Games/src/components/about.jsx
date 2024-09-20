import { useNavigate } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { useAuth } from "../context/authcontext";
import fondo from "../imgs/fondoSobreLU.png";
import e1 from "../imgs/catalogoEjemplo.png";
import e2 from "../imgs/catalogoEjemplo2.png";
import diagrama from "../pdf/doc.pdf";
import caso from "../pdf/Ejemplo.pdf";
import scrum from "../pdf/Cronograma Scrum.pdf";
import sprint1 from "../pdf/Scrum_1_TdePW.pdf";
import sprint2 from "../pdf/Scrum Semana 2.pdf";
import sprint3 from "../pdf/Scrum Semana 3.pdf";
import sprint4 from "../pdf/Scrum Semana 4.pdf";
import sprint5 from "../pdf/Scrum Semana 5.pdf";
import sprint6 from "../pdf/Scrum Semana 6.pdf";
export default function about() {
  const { user,getGamesO } = useAuth();
  const navigate = useNavigate();
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
            onClick={() => {
              navigate("/About");
            }}
            className="text-lg font-bold cursor-pointer"
          >
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
      <div className="relative w-full h-full">
        <img
          src={fondo}
          alt="Fondo"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10">
          <section id="equipo" className=" py-12">
            <h2 className="text-white text-center text-2xl mb-8">Equipo:</h2>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <img
                  className="w-40 h-40 rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHITJS4uaSCHgyGcoUQ0PbYIn4DmGN78d9w&usqp=CAU"
                  alt="Calderon Torres, Haldor"
                />
                <p className="text-white mt-4">Calderon Torres, Haldor</p>
              </div>
              <div className="text-center">
                <img
                  className="w-40 h-40 rounded-lg"
                  src="https://i.pinimg.com/736x/76/19/56/7619560b99ee667a6256ceb56a184dee.jpg"
                  alt="Kohatsu Corigliano, Diego"
                />
                <p className="text-white mt-4">Kohatsu Corigliano, Diego</p>
              </div>
              <div className="text-center">
                <img
                  className="w-40 h-40 rounded-lg"
                  src="https://i.pinimg.com/736x/c1/fb/ab/c1fbab2066a4835af95f86d1e4a4c868.jpg"
                  alt="Ramos Matamoros, Jampier"
                />
                <p className="text-white mt-4">Ramos Matamoros, Jampier</p>
              </div>
            </div>
          </section>
          <div>
            <section className="flex flex-col items-center py-12 px-6">
              <div className="flex flex-row items-center w-full mb-12">
                <img
                  className="w-2/5 h-auto ml-6"
                  src={e1}
                  alt="Catalogo Ejemplo"
                />
                <p className="text-lg text-white mx-20 mt-36">
                  En nuestro proyecto, nos embarcamos en la creación de una
                  plataforma que simula una experiencia de compra online,
                  ofreciendo una amplia gama de videojuegos para PC, Play
                  Station, Nintendo, entre otras, además de accesorios que
                  potencian la experiencia de juego. Con un diseño intuitivo y
                  un catálogo cuidadosamente seleccionado, Level Up tiene como
                  objetivo brindar a los usuarios una experiencia de compra
                  conveniente y emocionante, mientras los sumerge en el
                  apasionante mundo de los videojuegos y la tecnología.
                </p>
              </div>

              <div className="flex flex-row items-center w-full">
                <img
                  className="w-2/5 h-auto ml-6"
                  src={e2}
                  alt="Catalogo Ejemplo 2"
                />
                <div className="text-lg text-white mx-20 mt-10 space-y-4">
                  <p>
                    La propuesta de la marca "Level Up", se basa en la venta de
                    videojuegos y accesorios relacionados con estos, en gran
                    medida gracias al auge, la demanda y el crecimiento de esta
                    industria en la actualidad, acompañado con el aumento de la
                    venta de videojuegos digitales.
                  </p>
                  <p>
                    Esto ayudará a que los jugadores, puedan adquirirlos de
                    forma más rápida y eficiente, desde cualquier lugar del
                    planeta, y a un precio más accesible.
                  </p>
                  <p>
                    Misión:
                    <br />
                    "En Level Up, nos comprometemos a proporcionar a nuestros
                    clientes una experiencia excepcional en el mundo de los
                    videojuegos. Nos esforzamos por ofrecer una amplia gama de
                    productos y accesorios de calidad que satisfagan las
                    necesidades de todos los jugadores, desde los aficionados
                    hasta los más apasionados. Nos dedicamos a mantenernos
                    actualizados con las últimas tendencias y tecnologías para
                    asegurarnos de que nuestros clientes siempre estén un paso
                    adelante en su experiencia de juego".
                  </p>
                  <p>
                    Visión:
                    <br />
                    "Aspiramos a ser reconocidos como líderes en la industria de
                    los videojuegos y accesorios, tanto a nivel local como
                    internacional. Buscamos crear un espacio donde los jugadores
                    puedan encontrar todo lo que necesitan para potenciar su
                    experiencia de juego, desde los últimos lanzamientos hasta
                    los productos más innovadores."
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="bg-black  overflow-hidden shadow-xl">
        <h1 className="text-white text-lg px-4 py-2">Ubícanos</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8266103104806!2d-77.04020732485924!3d-12.055448142062607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c95c52ec6209%3A0x9f690f7b812a5006!2sWilson%20centro%20c%C3%B3mputo%20compras!5e0!3m2!1ses-419!2spe!4v1713897047582!5m2!1ses-419!2spe"
          className="w-full h-72 border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-black  overflow-hidden shadow-xl">
        <h2 className="ml-4 text-xl text-white">Diagrama</h2>
        <br />
        <div className="w-full h-96 mb-4">
          <object
            className="w-full h-full"
            data={diagrama}
            type="application/pdf"
          ></object>
        </div>
      </div>
      <div className="bg-black  overflow-hidden shadow-xl">
        <h2 className="ml-4 text-xl text-white">Ejemplo de caso de uso</h2>
        <br />
        <div className="w-full h-96 mb-4">
          <object
            className="w-full h-full"
            data={caso}
            type="application/pdf"
          ></object>
        </div>
      </div>
      <div className="bg-black  overflow-hidden shadow-xl">
        <h2 className="ml-4 text-xl text-white">Cronograma Scrum</h2>
        <br />
        <div className="w-full h-96 mb-4">
          <object
            className="w-full h-full"
            data={scrum}
            type="application/pdf"
          ></object>
        </div>
      </div>
      <div className="bg-black  overflow-hidden shadow-xl">
        <h2 className="ml-4 text-xl text-white">Sprint 1</h2>
        <br />
        <div className="w-full h-96 mb-4">
          <object
            className="w-full h-full"
            data={sprint1}
            type="application/pdf"
          ></object>
        </div>
      </div>
      <div className="bg-black  overflow-hidden shadow-xl">
        <h2 className="ml-4 text-xl text-white">Sprint 2</h2>
        <br />
        <div className="w-full h-96 mb-4">
          <object
            className="w-full h-full"
            data={sprint2}
            type="application/pdf"
          ></object>
        </div>
      </div>
      <div className="bg-black  overflow-hidden shadow-xl">
        <h2 className="ml-4 text-xl text-white">Sprint 3</h2>
        <br />
        <div className="w-full h-96 mb-4">
          <object
            className="w-full h-full"
            data={sprint3}
            type="application/pdf"
          ></object>
        </div>
      </div>
      <div className="bg-black  overflow-hidden shadow-xl">
        <h2 className="ml-4 text-xl text-white">Sprint 4</h2>
        <br />
        <div className="w-full h-96 mb-4">
          <object
            className="w-full h-full"
            data={sprint4}
            type="application/pdf"
          ></object>
        </div>
      </div>
      <div className="bg-black  overflow-hidden shadow-xl">
        <h2 className="ml-4 text-xl text-white">Sprint 5</h2>
        <br />
        <div className="w-full h-96 mb-4">
          <object
            className="w-full h-full"
            data={sprint5}
            type="application/pdf"
          ></object>
        </div>
      </div>
      <div className="bg-black  overflow-hidden shadow-xl">
        <h2 className="ml-4 text-xl text-white">Sprint 6</h2>
        <br />
        <div className="w-full h-96 mb-4">
          <object
            className="w-full h-full"
            data={sprint6}
            type="application/pdf"
          ></object>
        </div>
      </div>
      <br/>
      <div className="bg-slate-500 rounded-lg shadow-md p-6 max-w-xl mx-auto">
        <h2 className="text-2xl text-center mb-4">Encuesta de Opinión</h2>
        <form action="#" method="post">
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="nivel">
              ¿Qué nivel de aceptación le otorga a nuestro proyecto?
            </label>
            <div className="flex flex-wrap">
              <label className="mr-4 mb-2">
                <input
                  type="radio"
                  name="nivel"
                  value="Excelente"
                  className="mr-1"
                />
                Excelente
              </label>
              <label className="mr-4 mb-2">
                <input
                  type="radio"
                  name="nivel"
                  value="Muy bueno"
                  className="mr-1"
                />
                Muy Bueno
              </label>
              <label className="mr-4 mb-2">
                <input
                  type="radio"
                  name="nivel"
                  value="Bueno"
                  className="mr-1"
                />
                Bueno
              </label>
              <label className="mr-4 mb-2">
                <input
                  type="radio"
                  name="nivel"
                  value="Regular"
                  className="mr-1"
                />
                Regular
              </label>
              <label className="mr-4 mb-2">
                <input
                  type="radio"
                  name="nivel"
                  value="Malo"
                  className="mr-1"
                />
                Malo
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="comentarios">
              Comentarios adicionales:
            </label>
            <textarea
              name="comentarios"
              id="comentarios"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
