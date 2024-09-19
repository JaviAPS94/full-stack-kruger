const axios = require("axios");

const fetchDataWithPromises = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts/1");
};

fetchDataWithPromises()
  .then((response) => {
    console.log("Datos obtenidos correctamente", response.data);
  })
  .catch((error) => {
    console.error("Error consumiendo los datos", error);
  });
