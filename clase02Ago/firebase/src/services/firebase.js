// CRUD
// C -> Create
// R -> Read *
// U -> Update
// D -> Delete
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

//Vamos a definir el nombre la coleccion que vamos a utilizar de esa DB
const collectionName = "users";
const flatsCollectionName = "flats";

//Vamos a definir la referencia a la coleccion que vamos a utilizar
const usersColletionRef = collection(db, collectionName);
const flatsCollectionRef = collection(db, flatsCollectionName);

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

//Vamos a definir la funcion de actualizacion de datos
export const updateUser = async (id, updatedUserData) => {
  const userRef = doc(db, collectionName, id);
  await updateDoc(userRef, updatedUserData);
};

export const getUserById = async (id) => {
  const userRef = doc(db, collectionName, id);
  const user = await getDoc(userRef);
  return user.data();
};

export const deleteUser = async (id) => {
  await deleteDoc(doc(db, collectionName, id));
};

export const getUserByName = async (name) => {
  //dos cosas, query y el segundo es un where
  const queryData = query(usersColletionRef, where("name", "==", name));
  const querySnapshot = await getDocs(queryData);
  const users = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return users;
};

export const getFlatsByUserId = async (userId) => {
  const queryData = query(flatsCollectionRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(queryData);
  const flats = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return flats;
};
