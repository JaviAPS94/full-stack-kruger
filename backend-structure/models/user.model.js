import mongoose from "mongoose";
//Primer paso definir el schema de la base de datos para la colección de usuarios
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  favouriteFlats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flat",
    },
  ],
  // El proyecto les dice que hagan un borrado fisico, pero es mejor hacer un borrado logico
  deleted: {
    type: Date,
  },
});

export const User = mongoose.model("User", userSchema);
