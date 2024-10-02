import { MongoClient, ServerApiVersion } from "mongodb";
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

    const personDocument = {
      name: { first: "Alan", last: "Turing" },
      birth: new Date(1923, 5, 25),
      death: new Date(1980, 7, 19),
      contributions: ["Maquina de Turing", "Test de Turing"],
      views: 1000000,
    };

    const personDocument1 = {
      name: { first: "Alex", last: "Hamilton" },
      birth: new Date(1950, 1, 22),
      death: new Date(1994, 2, 8),
      contribs: ["Ninguna"],
      views: 100,
    };

    const personDocument2 = {
      name: { first: "Maria", last: "Espinoza" },
      birth: new Date(1960, 5, 15),
      death: new Date(1998, 3, 10),
      contribs: ["Pizarra"],
      views: 15000,
    };

    // await collection.insertOne(personDocument1);
    // await collection.insertOne(personDocument2);

    // await collection.insertMany([personDocument1, personDocument2]);
    //Vamos a consultar info en la BDD
    // const person = await collection.findOne();
    // console.log(person);
    // Lo que retorna el find es un objeto llamado cursor: una referencia a los documentos que cumplen con determinada condición
    // const people = await collection.find({}).toArray();
    // console.log(people);

    //Find with filter
    // const peopleFiltered = await collection.find({ views: 130000 }).toArray();
    // console.log(peopleFiltered);

    //Find with filter GT -> Greater than
    // const peopleFiltered = await collection
    //   .find({ views: { $gt: 100000 } })
    //   .toArray();
    // console.log(peopleFiltered);

    //Debemos buscar los documentos donde las vistas sean menores a 100000
    // const peopleFiltered = await collection
    //   .find({ views: { $lt: 100000 } })
    //   .toArray();
    // console.log(peopleFiltered);

    //Debemos buscar las personas que tengan las vistas mayores a 10000 y menores a 120000
    // const peopleFiltered = await collection
    //   .find({ views: { $gt: 10000, $lt: 120000 } })
    //   .toArray();
    // console.log(peopleFiltered);

    //Debemos buscar las personas que tengan las vistas mayores a 100000 y además que su fecha de nacimiento sea mayor a 1960-01-01
    // const peopleFiltered = await collection
    //   .find({ views: { $gt: 100000 }, birth: { $gt: new Date(1960, 1, 1) } })
    //   .toArray();
    // console.log(peopleFiltered);

    //Vamos a buscar la persona, que tenga el nombre de Lisa y el apellido sea Mine
    // const peopleFiltered = await collection
    //   .find({ name: { first: "Lisa", last: "Mine" } })
    //   .toArray();
    // console.log(peopleFiltered);
    const peopleFiltered = await collection
      .find({ "name.first": "Lisa", "name.last": "Mine" })
      .toArray();
    console.log(peopleFiltered);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
