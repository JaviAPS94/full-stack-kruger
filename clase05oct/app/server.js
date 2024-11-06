import express from "express";
import { connectDB } from "./db/db.js";
import productRoutes from "./routes/product.router.js";
import userRoutes from "./routes/user.router.js";
import authRoutes from "./routes/auth.router.js";
import logsRoutes from "./routes/logs.router.js";
import orderRoutes from "./routes/order.router.js";
import configs from "./configs/configs.js";
import cors from "cors";

const app = express();

//Middleware para parsear JSON
app.use(express.json());
app.use(cors());

connectDB();

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/logs", logsRoutes);
app.use("/orders", orderRoutes);

app.listen(configs.PORT, () => {
  console.log(`Server running on port ${configs.PORT}`);
});
