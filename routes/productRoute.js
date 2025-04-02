const express = require("express");
const {
  addProduct,
  addAllProducts,
  getShowingProducts,
  getDiscountProduct,
  getSingleProduct,
  getRelatedProducts,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("../controller/productController");

// router
const router = express.Router();

// add a products
router.post("/add", addProduct);
// add all products
router.post("/add-all", addAllProducts);
// get all products
router.get("/all", getAllProducts);
// get showing products
router.get("/show", getShowingProducts);
// get discount products
router.get("/discount", getDiscountProduct);
router.get("/relatedProduct", getRelatedProducts);
router.get("/:id", getSingleProduct);
// delete product
router.delete('/:id', deleteProduct);
// get Single Product
router.patch("/edit-product/:id", updateProduct);

module.exports = router;
