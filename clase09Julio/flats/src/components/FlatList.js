import { useContext, useState } from "react";
import FiltersContext from "../context/filters";
import useFlats from "../hooks/useFlats";
import FlatShow from "./FlatShow";
import FlatDetails from "./FlatDetails";

function FlatList() {
  const { filters, setFilters } = useContext(FiltersContext);
  const filteredFlats = useFlats(filters);
  const [selectedFlat, setSelectedFlat] = useState(null);

  const handleCityChange = (event) => {
    //actualizar el estado de los filtros: city
    setFilters({ ...filters, city: event.target.value });
  };

  const handlePriceChange = (event) => {
    //actualizar el estado de los filtros: price
    setFilters({ ...filters, price: event.target.value });
  };

  // id del departamento de la Carolina 1
  const handleFlatClick = (id) => {
    setSelectedFlat(filteredFlats.find((flat) => flat.id === id));
  };

  const content = filteredFlats.map((flat) => (
    <FlatShow flat={flat} handleDetail={handleFlatClick} />
  ));

  const handleBackClick = () => {
    setSelectedFlat(null);
  };

  return (
    <>
      {selectedFlat ? (
        <FlatDetails selectedFlat={selectedFlat} handleBack={handleBackClick} />
      ) : (
        <>
          <h1>Departamentos disponibles</h1>
          <h2>Filtros</h2>
          <label>City:</label>
          <input type="text" value={filters.city} onChange={handleCityChange} />
          <label>Price:</label>
          <input
            type="number"
            value={filters.price}
            onChange={handlePriceChange}
          />
          <ul>{content}</ul>
        </>
      )}
    </>
  );
}

export default FlatList;
