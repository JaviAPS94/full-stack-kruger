//En un try catch, siempre podemos tener 3 bloques
// 1.- try: es un bloque donde vamos a ejecutar determinado código
// 2.- En el que todo vaya bien, y por ende no ocurre ningún error en nuestro codigo
// 3.- En el que caso de que algo falle, podemos controlar o manejar ese error, y aqui usamos un catch
// 4.- en el ultimo bloque podemos tener un finally, que se ejecutará siempre, haya error o no

const dividir = (numerador, denominador) => {
  try {
    if (denominador === 0) {
      throw new Error("No se puede dividir por 0");
    }

    const resultado = numerador / denominador;
    console.log(resultado);
  } catch (error) {
    //vamos a capturar el error cuando el denominador sea 0
    console.error("Error:", error.message);
  } finally {
    console.log("Operación finalizada");
  }
};

dividir(10, 0);
dividir(10, 2);
