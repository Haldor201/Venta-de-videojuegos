import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { token } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import {tokenSecret} from "../config.js"
export const login = async (req, res) => {
  //trayendo datos
  const { email, password } = req.body;

  try {
    //buscamos usuario por email
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json([ "User not found" ]);
    //devuelve false o true si son iguales las contraseñas encriptadas
    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json(["Password Incorrect"] );

    //devuelve un token
    const tokenV = await token({ id: userFound._id });

    //a un cookie se le asigna el token
    res.cookie("token", tokenV);
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json({ message: ["Error al intentar logearse"] });
  }
};

export const register = async (req, res) => {
  //trayendo datos
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).send(["The email is already in use"],
      );
    //encriptamos la contraseña
    const hashPassword = await bcrypt.hash(password, 10);
    //asignando el usuario
    const newUser = new User({
      email,
      password: hashPassword,
    });
    //guardamos el usuario
    const newuser = await newUser.save();
    //devuelve un token
    const tokenV = await token({ id: newuser._id });
    //a un cookie se le asigna el token
    res.cookie("token", tokenV);

    res.json({
      id: newUser._id,
      email: newUser.email,
    });
  } catch (error) {
    res.status(500).send(["Error en el registro" ]);
  }
};

//Salir
export const logout = async (req, res) => {
  //                 token vacio
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

//RUTAS PROTEGIDAS, OSEA QUE ESTA PERMITIDA CUANDO TE LOGEAS
export const profile = async (req, res) => {
  //hacemos una busqueda a la bd para saber si hay un usuario
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.json({ message: ["Usuario no encontrado"] });
  res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, tokenSecret, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
