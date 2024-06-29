import { useEffect, useState } from "react";

function Counter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Incrementando segundos");
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    //cleanup function, se ejecuta cuando el componente se desmonta
    return () => {
      console.log("El componte se desmonto");
      clearInterval(intervalId);
    };
  }, []);

  return <p>Contador de segundos: {seconds}</p>;
}

export default Counter;
