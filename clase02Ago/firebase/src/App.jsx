import { useEffect, useState } from "react";
import { createUser, getUsers } from "./services/firebase";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const users = await getUsers();
    setUsers(users);
  };

  const handleCreateUser = async () => {
    await createUser({ name: "Juan", age: 30, hasDog: true });
  };

  handleCreateUser();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
