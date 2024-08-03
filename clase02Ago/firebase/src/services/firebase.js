// CRUD
// C -> Create
// R -> Read *
// U -> Update
// D -> Delete
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

//Vamos a definir el nombre la coleccion que vamos a utilizar de esa DB
const collectionName = "users";

//Vamos a definir la referencia a la coleccion que vamos a utilizar
const usersColletionRef = collection(db, collectionName);

//Vamos a definir la funcion de lectura de datos
export const getUsers = async () => {
  const data = await getDocs(usersColletionRef);
  const users = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return users;
};

//Vamos a definir la funcion de creacion de datos
export const createUser = async (user) => {
  await addDoc(usersColletionRef, user);
};
