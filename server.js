import express from "express";
import cors from "cors";
import carsRouter from "./routes/cars.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/cars", carsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Olex-copy backend is running", version: "0.1.0" });
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});
