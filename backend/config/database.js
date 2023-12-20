const { Module } = require("module");
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_DB_URI, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`MongoDB is Connected to the Host : ${con.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
