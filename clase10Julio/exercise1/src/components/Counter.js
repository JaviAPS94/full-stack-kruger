function Counter({ counter, setCounter }) {
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>Incrementar</button>
    </>
  );
}

export default Counter;
