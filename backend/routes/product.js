const express = require("express");

const router = express.Router();
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middlewares/authenticate");
const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.route("/products").get(isAuthenticatedUser, getProducts);
router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);
router.route("/product/:id").get(getSingleProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);
module.exports = router;
