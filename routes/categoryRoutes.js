const express = require("express");
const {
  addCategory,
  getShowingCategory,
  addAllCategory,
  getAllCategory,
  deleteCategory,
  getSingleCategory,
  updateCategory,
} = require("../controller/categoryController");

const router = express.Router();


//add a category
router.post("/add", addCategory);
//add all category
router.post("/add-all", addAllCategory);
//get only showing category
router.get("/show", getShowingCategory);
//get all category
router.get("/all", getAllCategory);
// delete category
router.delete('/delete/:id',deleteCategory);
// get
router.get('/get/:id',getSingleCategory);
// edit product
router.patch('/edit/:id', updateCategory);

module.exports = router;
