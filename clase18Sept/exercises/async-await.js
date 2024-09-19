const doSomething = async () => {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Tarea completada");
      }, 1000);
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

doSomething();
