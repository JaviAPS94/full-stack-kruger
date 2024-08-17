import { useContext, useState } from "react";
import AuthContext from "../context/authContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { username, password };

    //Implementar logica para obtener el usuario por username de firebase
    //bcrypt dependencia
    if (user.username === "admin" && user.password === "1234") {
      //hacer el login
      login(JSON.stringify(user));
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
