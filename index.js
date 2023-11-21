const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Hello from bandung"
  });
});

app.get("/destinations", (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "bandung, semarang, jogja, medan, papua"
  })
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
