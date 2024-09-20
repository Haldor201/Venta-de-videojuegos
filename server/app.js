import express from "express"
import morgan from "morgan"
import {conectar} from "./db.js"
import Auth from "./routes/auth.routes.js"
import Game from "./routes/game.routes.js"
import cookieParser from "cookie-parser";
import Cors from "cors"
const app = express();
const port = 3000;
conectar()
const corsOptions = {
  origin: 'http://localhost:5173', // Reemplaza con el origen de tu aplicación frontend
  credentials: true, // Permitir cookies y otros encabezados de autenticación
};

app.use(Cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json())
//convierte las cookies en un json
app.use(cookieParser())



app.use("/api",Auth)
app.use("/api/games",Game)


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});