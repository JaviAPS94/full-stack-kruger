const express = require("express");
const app = express();

app.get("/ping", (req, res) => res.send("pong"));

const PORT = 5173;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
