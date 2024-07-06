import { createContext } from "react";

//1. Vamos a crear nuestro contexto
const UserContext = createContext();

//2. Vamos a definir nuestro provider (proveedor la información)
function Provider({ children }) {
  const userData = {
    name: "Juan",
    email: "juan@gmail.com",
  };

  const number = 20;
  const message = "Hola soy un mensaje";

  const valuesToShare = {
    userData,
    number,
    message,
  };

  return (
    <UserContext.Provider value={valuesToShare}>
      {children}
    </UserContext.Provider>
  );
}

export { Provider };
export default UserContext;
