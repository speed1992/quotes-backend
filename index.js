import express from "express";
import dbConfig from "./database-config/dbConfig.js";
import dotenv from "dotenv";
import markedQuotesRoutes from "./routes/markedQuotesRoutes.js";
import { MONGO_URI } from "./database-config/constants.js";
dotenv.config();

const app = express();

const port = 80;

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(express.json());

app.use("/api/markedQuotes", markedQuotesRoutes);

app.use("/", (req, res) => {
  res.json({ message: "Ping successful" });
});

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
