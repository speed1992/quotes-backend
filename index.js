import express from "express";
import dbConfig from "./database-config/dbConfig.js";
import dotenv from "dotenv";
import markedQuotesRoutes from "./routes/markedQuotesRoutes.js";
import { MONGO_URI } from "./database-config/constants.js";
dotenv.config();

const app = express();

const port = 80;

app.use(express.json());

app.use("/", (req, res) => {
  res.json({ message: "Ping successful" });
});

app.use("/api/markedQuotes", markedQuotesRoutes);

const serverStart = async () => {
  try {
    console.log("connecting to", MONGO_URI);
    await dbConfig(MONGO_URI);
    app.listen(port, () => {
      console.log(`Starting server on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

serverStart();
