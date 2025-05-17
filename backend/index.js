const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello from the Backend!");
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
