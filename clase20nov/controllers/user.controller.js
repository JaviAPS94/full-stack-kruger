import db from "../db/db.js";

const getAllUsers = async (req, res) => {
  db.query("SELECT * FROM users", (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.json(results);
  });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM users WHERE id = ?", [id], (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: `User with id ${id} not found` });
    }
    res.json(results[0]);
  });
};

const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
  db.query(sql, [name, email, age], (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.status(201).json({ message: "User created", id: results.insertId });
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const sql = "UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?";
  db.query(sql, [name, email, age, id], (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.json({ message: "User updated" });
  });
};

const updateUserPartial = async (req, res) => {
  const { id } = req.params;
  //Esto que recibimos desde el body es un objeto
  const valuesToUpdate = req.body;

  //Vamos a armar el string de la consulta, con los campos dinamicos, es decir que podemos recibir
  //uno o varios campos a actualizar
  //{  name: 'Juan', email: 'juan@gmail.com' }
  //name = ?, email = ?
  //{  name: 'Juan' }
  //name = ?
  //{  age: 45, email: 'juanupdate@gmail.com' }
  //age = ?, email = ?
  //Vamos a obtener el nombre de las columnas que queremos actualizar
  //name = ?
  const fields = Object.keys(valuesToUpdate)
    .map((key) => `${key} = ?`)
    .join(", ");
  const values = Object.values(valuesToUpdate);

  const sql = `UPDATE users SET ${fields} WHERE id = ?`;
  db.query(sql, [...values, id], (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.json({ message: "User updated" });
  });
};

export { getAllUsers, getUserById, createUser, updateUser, updateUserPartial };
