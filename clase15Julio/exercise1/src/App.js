import { useRef, useState } from "react";

function App() {
  //forms con componentes no controlados
  // const emailRef = useRef();
  // const handleSubmit = () => {
  //   alert(emailRef.current.value);
  // };
  // return (
  //   <form onSubmit={handleSubmit}>
  //     Email: <input type="email" ref={emailRef} />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
  //forms con componentes controlados
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    alert(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      Email:{" "}
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
