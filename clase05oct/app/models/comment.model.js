import mongoose from "mongoose";

//Comentario estructura
// {
//     user: "1234",
//     message: "Hola mundo",
//     createdAt: "2021-10-05T22:00:00.000Z"
// }
// De alguna manera debemos poder llegar a obtener la informacion del usuario que hizo el comentario
// {
//     user: {
//         username: "admin",
//         email: "user.com",
//         role: "admin"
//     },
//     message: "Hola mundo",
//     createdAt: "2021-10-05T22:00:00.000Z"
// }
const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Comment = mongoose.model("comments", commentSchema);
