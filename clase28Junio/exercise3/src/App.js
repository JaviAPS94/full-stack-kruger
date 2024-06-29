function App() {
  const users = [
    { id: 1, name: "Alex", email: "alex@gmail.com" },
    { id: 2, name: "John", email: "john@gmail.com" },
    { id: 3, name: "Alice", email: "alice@gmail.com" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          Name: {user.name}, Email: {user.email}
        </li>
      ))}
    </ul>
  );
}

export default App;
