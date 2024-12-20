const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
// const productController = require("../controllers/product.controller.js");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// api/products GET
router.get("/", getProducts);

// api/products/:id GET
router.get("/:id", getProduct);

//api/products POST
router.post("/", createProduct);

// api/products/:id PUT
router.put("/:id", updateProduct);

// api/products/:id DELETE
router.delete("/:id", deleteProduct);

module.exports = router;
