const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");

const app = express();
const port = process.env.PORT || 5000;

connectDb();

app.use(express.json());
app.use(cors());
app.use(require("./middleware/authentication"));

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
