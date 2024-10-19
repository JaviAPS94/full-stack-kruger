import jwt from "jsonwebtoken";
import configs from "../configs/configs.js";

const authenticationMiddleware = (req, res, next) => {
  //Vamos a obtener el JWT del header del request
  const authHeader = req.header("Authorization");

  //Vamos a validar si esta llegando o no el JWT en el header y adicionalmente que el header impiece con la palabra bearer
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "Access denied, no token provided" });
  }

  //Vamos a validar el jwt
  try {
    //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjcxMmJkYzE5ZDk3OGE1M2U3MDMyMTc3Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MjkyOTE5ODksImV4cCI6MTcyOTI5NTU4OX0.wYhHJMst7wElZpa8S06HQIq4IkMEwFz6BcWDSm3Eyao
    const token = authHeader.split(" ")[1]; // ["Bearer", "eyJh...."]
    console.log(token);
    //Validarlo y decodificarlo
    const decoded = jwt.verify(token, configs.JWT_SECRET);
    console.log(decoded);
    //Modificar o agregar un atributo al request
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authenticationMiddleware;
