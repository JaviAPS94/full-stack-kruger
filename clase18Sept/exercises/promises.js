const doSomething = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucess = true;
      if (sucess) {
        resolve("Tarea completada con exito");
      } else {
        reject("Error en la tarea");
      }
    }, 1000);
  });
};

//para obtener el valor de la resolucion de la promesa podemos usar el .then
//y para capturar cualquier tipo de error podemos utilizar el catch
doSomething()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
