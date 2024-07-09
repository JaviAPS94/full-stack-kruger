import useInput from "./hooks/useInput";

function App() {
  const nameInput = useInput("");
  const emailInput = useInput("");
  // {
  //   value: "",
  //   onChange: funcion
  // }

  return (
    <>
      <label>Name:</label>
      <input type="text" {...nameInput} />
      <label>Email</label>
      <input type="email" {...emailInput} />
      {/* <input type="text" value={nameInput.value} onChange={nameInput.onChange} /> */}
    </>
  );
}

export default App;
