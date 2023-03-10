import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.use(express.static("frontend/build"));

// Express serve up index.html file if it doesn't recognize route

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "backend", "build", "index.html"));
});

process.on("unhandledRejection", (err) => {
  // if you want a stack always throw a error
  console.log(`Send this to error tracking: ${err.stack}`);
  console.log("____________");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port 5000`));
