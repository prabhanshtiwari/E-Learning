import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";

dotenv.config();

const app = express();

// Using middlewares
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({
    message: "Hi from index.js backend",
  });
});

// Routes import
import userRoutes from "./routes/user.routes.js";

// Using routes
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
