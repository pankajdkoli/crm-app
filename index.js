const express = require("express");
const appp = express();

const PORT = 4004;

appp.get("/", function (req, res) {
  res.send("hello world...!");
});

appp.listen(PORT, () => {
  console.log(`listening son  test  ${PORT}`);
});
