import { useState, useEffect } from 'react';
import Level from "../imgs/Level Up logo.png";
import { useForm } from "react-hook-form";
import Face from "../imgs/facebook.png";
import Insta from "../imgs/instagram.png";
import { useAuth } from "../context/authcontext";
import { useNavigate } from "react-router-dom";
import {loginSchema} from "../schemas/aut.js"
import { zodResolver } from '@hookform/resolvers/zod';


function Login() {
  const { signin, errorsA: loginErrors,isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [chatContent, setChatContent] = useState('');

  useEffect(() => {
    const initialMessage = `
      <div class="message p-4 bg-blue-100 rounded-lg mb-2">
        <div class="pChat"><p>¡Hola! Bienvenido a Level Up</p></div>
      </div>
      <div class="message p-4 bg-blue-100 rounded-lg mb-2">
        <div class="pChat">
          <ol class="list-decimal ml-5">
            <li>Quiero comprar juegos</li>
            <li>Quiero comprar accesorios</li>
            <li>Quiero comprar ambas cosas</li>
          </ol>
        </div>
      </div>
    `;
    setChatContent(initialMessage);
  }, []);

  const handleOptionClick = (option) => {
    let newMessage = '';
    if (option === '1') {
      newMessage = `
        <div class="message p-4 bg-blue-100 rounded-lg mb-2">
          <div class="pChat"><p>Tenemos mucha variedad de juegos disponibles</p></div>
        </div>
        <div class="message p-4 bg-blue-100 rounded-lg mb-2">
          <div class="pChat">
            <ol class="list-decimal ml-5">
              <li>Quiero comprar juegos</li>
              <li>Quiero comprar accesorios</li>
              <li>Quiero comprar ambas cosas</li>
            </ol>
          </div>
        </div>
      `;
    } else if (option === '2') {
      newMessage = `
        <div class="message p-4 bg-blue-100 rounded-lg mb-2">
          <div class="pChat"><p>Contamos con muchos accesorios para tu PC y también mandos de consola</p></div>
        </div>
        <div class="message p-4 bg-blue-100 rounded-lg mb-2">
          <div class="pChat">
            <ol class="list-decimal ml-5">
              <li>Quiero comprar juegos</li>
              <li>Quiero comprar accesorios</li>
              <li>Quiero comprar ambas cosas</li>
            </ol>
          </div>
        </div>
      `;
    } else {
      newMessage = `
        <div class="message p-4 bg-blue-100 rounded-lg mb-2">
          <div class="pChat"><p>Muy buena opción, tenemos mucha variedad</p></div>
        </div>
        <div class="message p-4 bg-blue-100 rounded-lg mb-2">
          <div class="pChat">
            <ol class="list-decimal ml-5">
              <li>Quiero comprar juegos</li>
              <li>Quiero comprar accesorios</li>
              <li>Quiero comprar ambas cosas</li>
            </ol>
          </div>
        </div>
      `;
    }
    setChatContent(newMessage);
  };


  const onSubmit = (values) => {
    signin(values);
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Home");
    }
  }, [isAuthenticated]);
  
  return (
    <div className="flex justify-center items-center bg-fondo-inicio bg-top w-full h-screen">
      <div className="cG bg-slate-500 absolute bottom-0 right-0 m-2 rounded-sm flex flex-col">
        <div className="chatG" dangerouslySetInnerHTML={{ __html: chatContent }}></div>
        <div className="flex flex-col flex-grow justify-end">
          <div className="flex flex-nowrap opcionesDiv text-center mt-auto">
            <div className="w-1/3 h-7 bg-amber-500 rounded-lg m-2 cursor-pointer" onClick={() => handleOptionClick('1')}>1</div>
            <div className="w-1/3 h-7 bg-amber-500 rounded-lg m-2 cursor-pointer" onClick={() => handleOptionClick('2')}>2</div>
            <div className="w-1/3 h-7 bg-amber-500 rounded-lg m-2 cursor-pointer" onClick={() => handleOptionClick('3')}>3</div>
          </div>
        </div>
      </div>
      <div className="rounded-md w-1/3 container text-gray-200 bg-slate-700 formL">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="logo">
            <img src={Level} className="w-64" alt="Level Up Logo" />
          </div>
          <div className="grid justify-items-center">
            {loginErrors.map((error, i) => (
              <p className="text-red-500" key={i}>{error}</p>
            ))}
            <label htmlFor="gmail">Ingresar email</label>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <input
              id="gmail"
              className="shadow appearance-none border rounded lg:w-2/3 my-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              {...register("email", { required: true })}
            />
            <label htmlFor="password">Ingresar contraseña</label>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            <input
              id="password"
              className="shadow appearance-none border rounded lg:w-2/3 my-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register("password", { required: true })}
            />
            <button
              type="submit"
              className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Acceder
            </button>
            <br />
            <p>Ingresa sin Logearte</p>
            <button
              onClick={() => navigate("/Home")}
              className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Ingresar
            </button>
            <br />
            <p>Registrate</p>
            <button
              onClick={() => navigate("/Register")}
              className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Ingresar
            </button>
            <br />
            <div className="flex justify-center">
              <a className="w-1/6" href="https://www.facebook.com/?locale=es_LA">
                <img src={Face} alt="Facebook" />
              </a>
              <a className="w-1/6" href="https://www.instagram.com/">
                <img src={Insta} alt="Instagram" />
              </a>
            </div>
            <h1>¡Síguenos!</h1>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
