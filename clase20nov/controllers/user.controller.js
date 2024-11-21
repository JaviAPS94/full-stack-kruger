import db from "../db/db.js";

const getAllUsers = async (req, res) => {
  db.query("SELECT * FROM users", (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    res.json(results);
  });
};

export { getAllUsers };
