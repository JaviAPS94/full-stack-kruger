import { useState, useEffect } from "react";
//Vamos a definir nuestro listado inicial de departamentos
//Vamos a definir la lógica de nuestros filtros (filter, useEffect)
const staticFlats = [
  {
    id: 1,
    name: "Departamento en la Carolina",
    city: "Quito",
    price: 100000,
    image: "https://picsum.photos/id/1/200/300",
  },
  {
    id: 2,
    name: "Departamento en New York",
    city: "New York",
    price: 500000,
    image: "https://picsum.photos/id/2/200/300",
  },
  {
    id: 3,
    name: "Departamento en Paris",
    city: "Paris",
    price: 400000,
    image: "https://picsum.photos/id/3/200/300",
  },
  {
    id: 4,
    name: "Departamento en Bogota",
    city: "Bogota",
    price: 500000,
    image: "https://picsum.photos/id/4/200/300",
  },
];

// Filtro
// {
//     city: "Quito", q
//     price: 100000,
// }

const useFlats = (filters) => {
  const [filteredFlats, setFilteredFlats] = useState(staticFlats);

  const applyFilters = () => {
    //filter para filtras elementos dentro de un arreglo
    const result = staticFlats.filter((flat) => {
      return (
        (filters.price ? flat.price <= filters.price : true) &&
        (filters.city
          ? flat.city.toLowerCase().includes(filters.city.toLowerCase())
          : true)
      );
    });

    setFilteredFlats(result);
  };

  useEffect(() => {
    //Lógica de los filtros
    applyFilters();
  }, [filters]);

  return filteredFlats;
};

export default useFlats;
