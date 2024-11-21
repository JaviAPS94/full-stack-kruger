import mysql from "mysql2";

//Vamos a crear la conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "users_db",
});

db.connect((error) => {
  if (error) {
    console.error(error.message);
    return;
  }
});

export default db;
