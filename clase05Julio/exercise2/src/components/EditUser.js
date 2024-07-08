import { useContext, useState } from "react";
import UserContext from "../context/users";

function EditUser() {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser({ name, email, age });
  };

  return (
    <>
      <h1>User Data</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleName} />
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmail} />
        <label>Age:</label>
        <input type="number" value={age} onChange={handleAge} />
        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default EditUser;
