const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

//available routes
app.get("/", (req, res) => {
  res.send("hello it's me");
});

// database connection
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error("Something went wrong", err));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
