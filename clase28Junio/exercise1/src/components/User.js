function User() {
  const user = {
    name: "John",
    age: 15,
    email: "john@gmail.com",
  };

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {user.age >= 18 ? (
        <p>{user.age}</p>
      ) : (
        <p>No puedes ver esta informacion</p>
      )}
    </>
  );
}

export default User;
