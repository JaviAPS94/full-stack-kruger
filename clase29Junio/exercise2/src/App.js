import { useEffect, useState } from "react";
import Test from "./components/Test";

const items = [
  "manzana",
  "sandia",
  "banana",
  "coco",
  "melon",
  "pera",
  "frutilla",
  "naranja",
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const results = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredItems(results);
  }, [searchTerm]);

  const renderedItems = filteredItems.map((item) => <li key={item}>{item}</li>);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        placeholder="Ingresa el termino a buscar"
        onChange={handleSearch}
      />
      <ul>{renderedItems}</ul>
    </>
  );
}

export default App;
