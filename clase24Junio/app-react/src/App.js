function Welcome(props) {
  return <h1>Welcome to React {props.user}</h1>;
}

function Ticket(props) {
  return (
    <>
      <h1>Ticket Details</h1>
      <ul>
        <li>Name: {props.name}</li>
        <li>Destination: {props.destination}</li>
        <li>Gender: {props.gender}</li>
        <li>Seat: {props.seat}</li>
      </ul>
    </>
  );
}

function App() {
  //padding-top
  const name = "Alex";

  const getUser = (user) => {
    return `${user.name} ${user.lastName}`;
  };

  const user = {
    name: "Alex",
    lastName: "Smith",
  };

  return (
    <>
      <h1>Title</h1>
      <p>{name}</p>
      <p>{getUser(user)}</p>
      <Welcome user="Alex" />
      <Welcome user="Martin" />
      <Ticket name="Alex" destination="Paris" gender="Male" seat="15B" />
      <Ticket name="Paul" destination="Barcelona" gender="Male" seat="66H" />
    </>
  );
}

export default App;
