import express from "express";

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.send("<h1>URL Shortener API</h1>");
});

export default app;
