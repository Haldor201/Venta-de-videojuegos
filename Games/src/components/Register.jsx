import Level from "../imgs/Level Up logo.png";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authcontext";
import { useNavigate } from 'react-router-dom';
import { registerSchema } from "../schemas/aut";
import { zodResolver } from "@hookform/resolvers/zod";

function Login() {
  const { signup,isAuthenticated,errorsA: registerErrors} = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (values) => {
    signup(values)
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Home");
    }
  }, [isAuthenticated]);

  return (
    <div className="flex justify-center items-center bg-fondo-inicio bg-top w-full h-screen">
      <div className="rounded-md w-1/3 container text-gray-200 bg-slate-700 formL">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="logo">
            <img src={Level} className="w-64" />
          </div>
          <div className="grid justify-items-center">
          {registerErrors.map((error, i) => (
              <p className="text-red-500" key={i}>{error}</p>
            ))}
            {errors.email?.message && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
            <label htmlFor="gmail">Ingresar email</label>
            <input
              id="gmail"
              className="shadow appearance-none border rounded lg:w-2/3 my-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              {...register("email")}
            />
            {errors.password?.message && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
            <label htmlFor="password">Ingresar contraseña</label>
            <input
              id="password"
              className="shadow appearance-none border rounded lg:w-2/3 my-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register("password")}
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-500">{errors.confirmPassword?.message}</p>
            )}
            <label htmlFor="password">Confirmar contraseña</label>
            <input
              id="password"
              className="shadow appearance-none border rounded lg:w-2/3 my-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register("confirmPassword")}
            />
            
            <button
              type="submit"
              className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Acceder
            </button>
            <br/>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;