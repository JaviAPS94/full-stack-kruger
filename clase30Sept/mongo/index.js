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

    //await collection.insertOne(personDocument);
    //Vamos a consultar info en la BDD
    const person = await collection.findOne();
    console.log(person);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
