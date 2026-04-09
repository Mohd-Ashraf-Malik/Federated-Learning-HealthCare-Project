import express from "express";
import connectDB from "./src/config/db.js";
import apiRoutes from "./src/routes/index.js";
import { errorHandler, notFound } from "./src/middlewares/errorHandler.js";
import "./src/model/index.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Alzheimer's federated backend is running",
  });
});

app.use("/api", apiRoutes);
app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  await connectDB();

  app.listen(PORT || 3000, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
