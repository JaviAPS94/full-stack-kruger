import express from "express";
import { connectDB } from "./db/db.js";
import productRoutes from "./routes/product.router.js";
import userRoutes from "./routes/user.router.js";
import authRoutes from "./routes/auth.router.js";
import configs from "./configs/configs.js";

const app = express();

//Middleware para parsear JSON
app.use(express.json());

connectDB();

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(configs.PORT, () => {
  console.log(`Server running on port ${configs.PORT}`);
});
