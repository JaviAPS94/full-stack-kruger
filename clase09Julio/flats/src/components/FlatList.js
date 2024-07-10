import { useContext } from "react";
import FiltersContext from "../context/filters";
import useFlats from "../hooks/useFlats";
import FlatShow from "./FlatShow";

function FlatList() {
  const { filters, setFilters } = useContext(FiltersContext);
  const filteredFlats = useFlats(filters);

  const handleCityChange = (event) => {
    //actualizar el estado de los filtros: city
    setFilters({ ...filters, city: event.target.value });
  };

  const handlePriceChange = (event) => {
    //actualizar el estado de los filtros: price
    setFilters({ ...filters, price: event.target.value });
  };

  const content = filteredFlats.map((flat) => <FlatShow flat={flat} />);

  return (
    <>
      <h1>Departamentos disponibles</h1>
      <h2>Filtros</h2>
      <label>City:</label>
      <input type="text" value={filters.city} onChange={handleCityChange} />
      <label>Price:</label>
      <input type="number" value={filters.price} onChange={handlePriceChange} />
      <ul>{content}</ul>
    </>
  );
}

export default FlatList;
