import Game from "../models/game.model.js";
import GameO from "../models/gameO.model.js";
import { tokenSecret } from "../config.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
export const addGame = async (req, res) => {
  const { title, imgs, type, description, price } = req.body;
  try {
    //buscamos usuario por email
    const gameFound = await Game.findOne({ title });

    if (gameFound)
      return res
        .status(400)
        .json({ message: "The game is already in the database" });

    const newGame = new Game({
      title,
      imgs,
      type,
      description,
      price,
    });
    //guardamos el usuario
    const newGameBD = await newGame.save();

    res.json(newGameBD);
  } catch (error) {
    console.log(error);
  }
};

export const gameFound = async (req, res) => {
  try {
    const id_game = req.params.id;
    const gameFound = await Game.findById({ _id: id_game });

    if (!gameFound) return res.status(404).json({ message: "Game not found" });

    res.json(gameFound);
  } catch (error) {
    console.log(error);
  }
};

export const gameList = async (req, res) => {
  try {
    const allGames = await Game.find();
    res.send(allGames);
  } catch (error) {
    console.log(error);
  }
};

//obtiene el token y si esta registrado le permite comprar y hace relacion al documento de los usuarios
export const gameBuy = async (req, res) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(400).send(["First Login in the page for to buy a game"]);

  jwt.verify(token, tokenSecret, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);
    const { title, description, price } = req.body;
    const newGameO = new GameO({
      title,
      description,
      price,
      user: user.id,
    });

    //guardamos el juego comprado
    const newGameOBD = await newGameO.save();
    res.send(["Comprado"]);
  });
};

export const gameListP = async (req, res) => {
  try {
    const allGames = await GameO.find({ user: req.user.id });
    res.send(allGames);
  } catch (error) {
    console.log(error);
  }
};

export const gameListT = async (req, res) => {
  try {
    const allGames = await Game.find({ type : req.params.Type });
    res.send(allGames);
  } catch (error) {
    console.log(error);
  }
};
