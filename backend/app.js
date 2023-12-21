const express = require("express");

const app = express();
const errorMiddleware = require("./middlewares/error");
//middlewares

app.use(express.json());

//Routes
const products = require("./routes/product");
const auth = require("./routes/auth");
app.use("/api/v1/", products);
app.use("/api/v1/", auth);

app.use(errorMiddleware);

module.exports = app;
