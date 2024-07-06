import { useContext } from "react";
import UserContext from "../context/users";

function EditUser() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>User Data</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </>
  );
}

export default EditUser;
