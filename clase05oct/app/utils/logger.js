import winston from "winston";

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  //template string
  //Vamos a reemplazar {"level":"error","message":"Esto es un error"}
  //por esto "2021-10-05 10:00:00 [ERROR]: Esto es un error"
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

//Vamos a crear nuestro logger
//Para esto tenemos que definir un transporte
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  transports: [
    new winston.transports.Console({ level: "silly" }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "warn",
    }),
  ],
});

//Como registrar los eventos en consola
//logger.error("Hola mundo esto es un error")
//logger.warn("Hola mundo esto es un warn")
//logger.info("Hola mundo con logger")
//logger.http("Hola mundo con logger es un http")
//logger.verbose("Hola mundo con logger es un verbose")
//logger.debug("Hola mundo esto es un debug")
//logger.silly("Hola mundo esto es un silly")

export default logger;
