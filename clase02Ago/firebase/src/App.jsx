import { useEffect, useRef, useState } from "react";
import {
  createUser,
  getFlatsByUserId,
  getUserByName,
  getUsers,
} from "./services/firebase";

function App() {
  const [users, setUsers] = useState([]);
  const nameRef = useRef();
  const ageRef = useRef();
  const hasDogRef = useRef();

  const fetchData = async () => {
    const users = await getUsers();
    setUsers(users);
  };

  const handleCreateUser = async () => {
    await createUser({
      name: nameRef.current.value,
      age: Number(ageRef.current.value),
      hasDog: hasDogRef.current.checked,
    });
    await fetchData();
  };

  const handleGetUsersByName = async () => {
    const users = await getUserByName("Alex");
    console.log(users);
  };

  const handleGetFlatsByUserId = async () => {
    const flats = await getFlatsByUserId("84Ca9Rc5EP8QEk3kegta");
    console.log(flats);
  };

  handleGetFlatsByUserId();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <div>
        <input placeholder="Nombre" ref={nameRef} />
        <input placeholder="Edad" ref={ageRef} />
        <input type="checkbox" ref={hasDogRef} />
        Tienes perro?
        <button onClick={handleCreateUser}>Crear usuario</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} tiene {user.age}{" "}
            {user.hasDog ? "y tiene un perro" : "y no tiene perro"}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
