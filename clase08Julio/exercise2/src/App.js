import useToggle from "./hooks/useToggle";

function App() {
  const [isToggled, toggle] = useToggle(true);
  return (
    <>
      {isToggled ? "Toggle is ON" : "Toggle is OFF"}
      <button onClick={toggle}>Toggle</button>
    </>
  );
}

export default App;
