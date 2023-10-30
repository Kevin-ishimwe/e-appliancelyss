import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use(userRoutes);
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.get("/download", (req, res) => {
  console.log("working......");
  res.json({ success: "success" });
});

const port = process.env.PORT || 5172;
mongoose.set("strictQuery", true);
try {
  mongoose.connect("mongodb://localhost:27017/LyssDB").then(() => {
    app.listen(port, () => {
      console.log("http://127.0.0.1:5172/");
    });
  });
} catch (error) {
  throw new Error("ERROR:", error);
}
