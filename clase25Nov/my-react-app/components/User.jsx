import { useEffect, useState } from "react";
import axios from "axios";

const API_HOST = "http://localhost:8080";

const User = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  //Para obtener el listado de usuarios tenemos que consumir un servicio de nuestro
  //backend GET /users

  useEffect(() => {
    //vamos a consumir el servicio GET /users
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(API_HOST + "/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      //Vamos a consumir el servicio de tipo /users POST
      await axios.post(API_HOST + "/users", formData);
      setFormData({
        name: "",
        email: "",
        age: "",
      });
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>Nombre: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label>Edad: </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Guardar</button>
      </form>
      <h2>Listado de usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}), Edad: {user.age}
          </li>
        ))}
      </ul>
    </>
  );
};

export default User;
