import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ["admin", "user", "author"],
    default: "user",
  },
});

//Vamos a aplicar un pre hook (proceso que se va a ejecutar antes de alamacenar el usuario en BDD)
//El primer parametro de nuestro pre hook, es la operacion a la cual vamos a aplicar el hook
userSchema.pre("save", async function (next) {
  const user = this; //this -> es el objeto que estamos guardando en BDD

  //Solo si se esta modificando el atributo password vamos a proceder a hashear la contraseña
  if (user.isModified("password")) {
    try {
      //Primer paso para hashear la contraseña, es generar un salt (va ha ser generado de manera randomica)
      const salt = await bcrypt.genSalt(10);

      //Segundo paso, es hashear la contraseña
      // 1234 -> $%$JKSDJFHHJKASDWRW1234
      const hash = await bcrypt.hash(user.password, salt);

      //Tercer paso, es asignar la contraseña hasheada al atributo password
      user.password = hash;

      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

//Vamos a crear un hook que se encargue de eliminar la contraseña del objeto que se va a devolver al cliente
userSchema.post("find", function (docs, next) {
  docs.forEach((doc) => {
    doc.password = undefined;
  });
  next();
});

//Vamos a extender la funcionalidad de nuestro schema, de manera que tenga un metodo que nos permita
//comparar la contraseña que el usuario esta enviando con la contraseña que esta almacenada en BDD
//recibe como parametro el password que envia el cliente para autenticarse
userSchema.methods.comparePasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("users", userSchema);
