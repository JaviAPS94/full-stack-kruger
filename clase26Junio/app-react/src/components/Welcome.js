import { useState } from "react";

function Welcome(props) {
  const [message, setMessage] = useState("Hello");

  return (
    <h1>
      Welcome to React {props.user} {message}
    </h1>
  );
}

export default Welcome;
