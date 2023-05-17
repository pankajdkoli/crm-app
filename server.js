const express = require("express");
const connectToMongo = require("./db");
const auth = require("./routes/userAuth");

//connection to db
connectToMongo();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello it's me");
});

//available routes
app.use("/auth", auth);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
