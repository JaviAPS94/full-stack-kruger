import Welcome from "./components/Welcome";
import Ticket from "./components/Ticket";
import Counter from "./components/Counter";
import Event from "./components/Event";

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
      <Event />
      <Counter />
      <Welcome user="Alex" />
      <Welcome user="Martin" />
      <Ticket name="Alex" destination="Paris" gender="Male" seat="15B" />
      <Ticket name="Paul" destination="Barcelona" gender="Male" seat="66H" />
    </>
  );
}

export default App;
