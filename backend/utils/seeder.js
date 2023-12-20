const products = require("../data/products.json");

const Product = require("../models/productModel");

const dotenv = require("dotenv");

const connectDatabase = require("../config/database");

dotenv.config({ path: "backend/config/config.env" });
connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products Deleted");
    await Product.insertMany(products);
    console.log("Products Inserted");
  } catch (error) {
    console.log(error.message);
  }
  process.exit();
};

seedProducts();
