//Vamos a resolver un ejercicio que nos permita consumir un API
const axios = require("axios");

//Este callback nos va a permitir obtener la información del API
const fetchDataWithCallback = (callback) => {
  //Vamos a realizar una peticion http de tipo GET a la API de JSONPlaceholder
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      callback(null, response.data);
    })
    .catch((error) => {
      callback(error, null);
    });
};

fetchDataWithCallback((error, data) => {
  if (error) {
    console.error("Erro consumiendo los datos", error);
  } else {
    console.log("Datos obtenidos correctamente", data);
  }
});
