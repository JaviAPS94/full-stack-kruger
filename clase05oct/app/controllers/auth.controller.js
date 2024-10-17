import configs from "../configs/configs.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    //1.- Vamos a obtener las credenciales (username, password) del request
    const { username, password } = req.body;
    //2.- Vamos a buscar el usuario en la BDD, si no existe vamos a retornar un 404
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //3.- Vamos a comparar la contraseña que viene en el request con la contraseña hasheada que tenemos en la BDD
    const passwordsMatch = await user.comparePasswords(password);
    //4.- Si las contraseñas no coinciden, vamos a retornar un 401
    if (!passwordsMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    //5.- Si las contraseñas coinciden, vamos a generar un token JWT y lo vamos a retornar en la respuesta
    // El metodo sign lo que hace es firmar nuestro jwt (token), la firma del token sirve para poder validar
    // que el token no ha sido modificado por un tercero
    // EL primer parametro que vamos a enviar en el metodo es un objeto que contiene la informacion del usuario
    // FSHGAFGJDFG%JSDFK/(435345) -> Informacion del usuario
    const token = await jwt.sign(
      { user_id: user._id, role: user.role },
      configs.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { register, login };
