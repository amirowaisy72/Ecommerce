const connectToMongoose = require("./db");
const express = require("express");
const app = express();
var cors = require("cors");

connectToMongoose();

app.use(express.json());
app.use(cors());
app.listen(5000, () => {
  console.log("listening at port 5000");
});

//Available Routes
app.use("/products", require("./routes/products.js"));
