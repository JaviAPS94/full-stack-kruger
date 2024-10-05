import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://alexp:admin1234@krugerbackendap.qqltu.mongodb.net/?retryWrites=true&w=majority&appName=KrugerBackendAP";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("krugerap");
    const collection = database.collection("people");

    //Query with arrays
    // const peopleFiltered = await collection
    //   .find({ contribs: "Turingery" })
    //   .toArray();
    // console.log(peopleFiltered);

    //Query with arrays vamos a aplicar una condicion de OR
    //$in -> que vamos a buscar elementos donde se cumpla con al menos 1 condicion
    // const peopleFiltered = await collection
    //   .find({
    //     contribs: { $in: ["Mouse", "Computer"] },
    //   })
    //   .toArray();
    // console.log(peopleFiltered);

    //Query with arrays vamos a aplicar una condicion de AND
    // const peopleFiltered = await collection
    //   .find({
    //     contribs: { $all: ["Mouse", "Screen"] },
    //   })
    //   .toArray();
    // console.log(peopleFiltered);

    //Query with arrays size
    // const peopleFiltered = await collection
    //   .find({
    //     contribs: { $size: 1 },
    //   })
    //   .toArray();

    // console.log(peopleFiltered);

    //Cada vez que hacemos un query, tenemos la opcion de poder ordenar los resultados
    //podemos ordenar de manera ascendente (1) o descendente (-1)
    // const peopleFiltered = await collection
    //   .find()
    //   .sort({ views: -1 })
    //   .toArray();
    // console.log(peopleFiltered);

    //Limitar la cantidad de resultados
    // const peopleFiltered = await collection.find().limit(2).toArray();
    // console.log(peopleFiltered);

    //Eliminar un registro
    // Borrado logico -> vamos a actualizar el registro con un campo de auditoria (deleted_at -> fecha de eliminacion)
    // Borrado fisico -> vamos a eliminar el registro de la base de datos
    // const deletedPerson = await collection.deleteOne({
    //   _id: new ObjectId("66fc82325be8343eb10356ae"),
    // });
    // console.log(deletedPerson);

    //Actualizar un documento
    const updatedPerson = await collection.updateOne(
      {
        _id: new ObjectId("66fc7d8a2ae7c70a3960451c"),
      },
      {
        $set: {
          views: 500,
        },
      }
    );
    console.log(updatedPerson);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
