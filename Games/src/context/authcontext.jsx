import { createContext, useState, useContext, useEffect } from "react";
import {loginRequest,registerRequest,verifyTokenRequest,logoutRequest} from "../api/auth.js"
import {allGamesRequest,buyGameRequest,allGamesPRequest,allGamesTypeRequest} from "../api/games.js"
import Cookies from "js-cookie";
/**
 * creamos un contexto para poder acceder al usuario
 */
const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [type, setType] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorsA, setErrorsA] = useState([]);
  const [loading,setLoading]=useState(false);
  const [games,setGames]=useState([])
  const [gamesT,setGamesT]=useState([])
  const [gamesO,setGamesO]=useState([])
  //enviar datos para el registro
  const signup = async(user) => {
    try {
      const res= await registerRequest(user)
      const resG = await allGamesRequest();
      setUser(res.data);
      setIsAuthenticated(true)
      setLoading(true)  
      setGames(resG.data)
    } catch (error) {
      setErrorsA(error.response.data)
    }
  };
  const getGamesO = async() => {
    try {
      setGamesO([])
      const resGP=await allGamesPRequest();
      setGamesO(resGP.data)
    } catch (error) {
      console.log(error)
    }
  };
  const buy = async(game) => {
    try {
      const res= await buyGameRequest(game)
      setGamesO([])
      const resGP=await allGamesPRequest();
      setGamesO(resGP.data)
      alert(res.data[0])
    } catch (error) {
      alert(error.response.data[0])
    }
  };
  const getGamesT = async(type) => {
    try {
      setGamesT([])
      const res= await allGamesTypeRequest(type)
      setGamesT(res.data)
    } catch (error) {
      console.log(error)
    }
  };
  //enviar datos para el login
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      const resG = await allGamesRequest();
      const resGP=await allGamesPRequest();
      setGamesO(resGP.data)
      setUser(res.data);
      setIsAuthenticated(true);
      setLoading(true)
      setGames(resG.data)
    } catch (error) {
      setErrorsA(error.response.data)
    }
  };
  const logoutP=async()=>{
    try {
      const res=await logoutRequest();
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  const setTypeG=(type)=>{
    try {
      setType(type)
    } catch (error) {
      console.log(error)
    }
  }
  // clear errors after 5 seconds
  useEffect(() => {
    if (errorsA.length > 0) {
      const timer = setTimeout(() => {
        setErrorsA([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorsA]);

  useEffect(() => {
    const checkLogin = async () => {
      const resG = await allGamesRequest();
      setGames(resG.data);
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        //importamos para que todos, puedan usarlo
        signup,
        user,
        loading,
        isAuthenticated,
        errorsA,
        signin,
        buy,
        logoutP,
        getGamesO,
        gamesO,
        games,
        setTypeG,
        type,getGamesT,gamesT
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
