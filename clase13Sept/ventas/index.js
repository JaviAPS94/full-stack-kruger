const { readData, writeData } = require("./crud");
const XLSX = require("xlsx");
const fs = require("fs").promises;

// {
//     "date": "2021-09-13",
//     "product": "Keyboard",
//     "quantity": 3,
//     "price": 100
// }
const createSale = async (sale) => {
  const result = await readData();
  const newId = result.length ? result[result.length - 1].id + 1 : 1;
  sale.id = newId;
  //Ya tenemos el objeto venta a insertar en nuestro archivo
  result.push(sale);
  //Procedemos a guardar el arreglo actualizado en nuestro archivo
  await writeData(result);
  console.log("Venta creada exitosamente");
};

const readSales = async (id) => {
  //En el caso de recibir el id, vamos a buscar la venta con ese id
  //En el caso que no recibamos el id, vamos a devolver todas las ventas
  const result = await readData();
  if (id) {
    const sale = result.find((s) => s.id === id);
    if (sale) {
      console.log(`Venta encontrada con el id ${id}:`, sale);
    } else {
      console.log("Venta no encontrada");
    }
    return sale;
  }
  console.log(result);
  return result;
};

//Delete
const deleteSale = async (id) => {
  const data = await readData();
  const updatedData = data.filter((sale) => sale.id !== id);
  if (updatedData.length !== data.length) {
    await writeData(updatedData);
    console.log(`Venta con id ${id} eliminada exitosamente`);
  } else {
    console.log(`Venta con id ${id} no encontrada`);
  }
};

//Update
const updateSale = async (id, updatedSale) => {
  const data = await readData();
  const saleIndex = data.findIndex((sale) => sale.id === id);
  if (saleIndex !== -1) {
    data[saleIndex] = { id, ...updatedSale };
    await writeData(data);
    console.log(`Venta con id ${id} actualizada exitosamente`);
  } else {
    console.log(`Venta con id ${id} no encontrada`);
  }
};

const generateExcelReport = async () => {
  //Primer paso en leer todas las ventas que vamos a utilizar para generar el reporte
  const sales = await readSales();

  //Convertir los datos de nuestro arreglo a una hoja de trabajo de excel
  const worksheet = XLSX.utils.json_to_sheet(sales);

  //Crear una nueva libro de trabajo y vamos a agregar nuestra hoja
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, worksheet, "Reporte de ventas");

  const excelBuffer = XLSX.write(workBook, {
    bookType: "xlsx",
    type: "buffer",
  });

  await fs.writeFile("reporte-ventas.xlsx", excelBuffer);
  console.log("Reporte generado exitosamente");
};

// const main = async () => {
//   //   await createSale({
//   //     date: "2024-09-13",
//   //     product: "Phone",
//   //     quantity: 1,
//   //     price: 500,
//   //   });
//   //   await readSales(9);
//   //   await generateExcelReport();
//   //   await deleteSale(5);
//   await updateSale(1, {
//     date: "2024-06-07",
//     product: "Laptop",
//     quantity: 10,
//     price: 10000,
//   });
// };

// main();

module.exports = {
  createSale,
  readSales,
  deleteSale,
  updateSale,
  generateExcelReport,
};
