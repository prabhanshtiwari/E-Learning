import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import Razorpay from "razorpay";
import cors from "cors";

dotenv.config();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const app = express();

// Using middlewares
app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({
    message: "Hi from index.js backend",
  });
});

// Routes import
import userRoutes from "./routes/user.routes.js";
import courseRoutes from "./routes/course.routes.js";
import adminRoutes from "./routes/admin.route.js";

// Using routes
app.use("/api/user", userRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
