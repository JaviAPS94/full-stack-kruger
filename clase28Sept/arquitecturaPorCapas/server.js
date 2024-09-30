//Deria tener unicamente las configuraciones iniciales de nuetro servidor
import express from "express";
import toysRouter from "./routes/toys.router.js";

const app = express();
app.use(express.json());

app.use("/api/v1/toys", toysRouter);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
