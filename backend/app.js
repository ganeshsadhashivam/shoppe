const express = require("express");

const app = express();

//middlewares

app.use(express.json());

//Routes
const products = require("./routes/product");

app.use("/api/v1/", products);

module.exports = app;
