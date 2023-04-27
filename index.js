import express from "express";

const app = express();

const port = 9000;

app.use("/", (req, res) => {
  res.json({ message: "Hello from express app" });
});

app.use("/ping", (req, res) => {
  res.json({ message: "Ping successful" });
});

app.listen(port, () => {
  console.log(`Starting server on port ${port}`);
});
