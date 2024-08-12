// function delayLog(content) {
//   setTimeout(() => {
//     console.log(content);
//   }, 1000);
// }

// for (let i = 0; i < 5; i++) delayLog(i);
// console.log("Loop finished");

// function delayLog(content) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(content);
//       resolve();
//     }, 1000);
//   });
// }

// async function logSequence() {
//   for (let i = 0; i < 5; i++) {
//     await delayLog(i);
//   }
//   console.log("Loop finished");
// }

// logSequence();
// function getData() {
//   let data;
//   fetch("https://api.example.com/data").then((res) => (data = res.json()));
//   return data;
// }
// console.log(getData());

async function getData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

getData().then((data) => console.log(data));

//Funcion para iterar un arreglo de numeros
function iterateArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
