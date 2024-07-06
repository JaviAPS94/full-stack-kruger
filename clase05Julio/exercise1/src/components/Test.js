import { useContext } from "react";
import UserContext from "../context/users";

function Test() {
  //3.- Consumir el contexto
  const { userData, number, message } = useContext(UserContext);
  return (
    <>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
      <p>{number}</p>
      <p>{message}</p>
    </>
  );
}

export default Test;
