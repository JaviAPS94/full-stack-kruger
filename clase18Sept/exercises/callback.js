//callback es una funcion que pasamos como parametro a otra funcion
const doSomething = (callback) => {
  //vamos a enviar dos cosas en el setTiemout, 1.- bloque de codigo a ejecutar, 2.- tiempo en milisegundos
  setTimeout(() => {
    console.log("Tarea completada");
    callback();
  }, 1000);
};

doSomething(() => {
  console.log("Callback ejecutado");
});
