import { createContext, useState } from "react";

//Creamos el contexto
const FiltersContext = createContext();

//Creamos el provider (que es el que se encarga de proveedor los datos dentro del contexto)
const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    city: "",
    price: 0,
  });

  //vamos a definir el objeto que vamos a compartir
  const valuesToShare = {
    filters,
    setFilters,
  };

  return (
    <FiltersContext.Provider value={valuesToShare}>
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersProvider };
export default FiltersContext;
