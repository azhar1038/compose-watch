import express from "express";
import { hostname } from "os";

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Hello World 3",
    hostname: hostname(),
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
