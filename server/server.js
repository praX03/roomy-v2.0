const express = require("express");
const cors = require("cors");
const user =require('./routes/user');
require("./db/ConnectDB");
require("dotenv").config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", user);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});