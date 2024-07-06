import { createContext, useState } from "react";

const UserContext = createContext();

function Provider({ children }) {
  const [user, setUser] = useState({
    name: "Alex",
    email: "alex@gmail.com",
    age: 30,
  });

  //Vamos a actualizar la informacion del usuario
  const updateUser = (newUser) => {
    setUser({ ...user, ...newUser });
  };

  const valuesToShare = {
    user,
    updateUser,
  };

  return (
    <UserContext.Provider value={valuesToShare}>
      {children}
    </UserContext.Provider>
  );
}

export { Provider };
export default UserContext;
