import { useState } from "react";

function Event() {
  const [message, setMessage] = useState("Hello");

  const handleClick = () => {
    setMessage("Good bye");
  };

  const handleClickAlert = (name) => {
    alert(name);
  };

  return (
    <>
      <h1>Message: {message}</h1>
      <button onClick={handleClick}>Change message</button>
      <button
        onClick={() => {
          handleClickAlert("Alex");
        }}
      >
        Mostrar alert
      </button>
    </>
  );
}

export default Event;
