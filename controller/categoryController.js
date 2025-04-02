const ApiError = require('../errors/api-error');
const Category = require('../models/Category');

// add category
module.exports.addCategory = async (req,res,next) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.send({
      message:'Category added successfully',
    })
  } catch (error) {
    next(error)
  }
}
// add all category
module.exports.addAllCategory = async (req,res) => {
  try {
    await Category.deleteMany();
    const result = await Category.insertMany(req.body);
    res.json({
      message:'Category added successfully',
      result,
    })
  } catch (error) {
    res.status(500).send({
      message:error.message
    })
  }
}
// get all showing category
module.exports.getShowingCategory = async (req,res,next) => {
  try {
    const result = await Category.find({status:'Show'});
    res.json({
      success:true,
      categories:result,
    })
  } catch (error) {
    next(error)
  }
}
// get all category
module.exports.getAllCategory = async (req,res,next) => {
  try {
    const result = await Category.find().populate('products');
    res.status(200).json({
      success:true,
      result,
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}
// deleteCategory category
module.exports.deleteCategory = async (req,res,next) => {
  try {
    const result = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success:true,
      message:'Category delete successfully'
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}
// get category
module.exports.getSingleCategory = async (req,res,next) => {
  try {
    const result = await Category.findById(req.params.id);
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    next(error)
  }
}
// update Category
module.exports.updateCategory = async (req,res,next) => {
  try {
    const isExist = await Category.findOne({ _id: req.params.id });

    if (!isExist) {
      throw new ApiError(404, "Category not found !");
    }

    const result = await Category.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      status:'success',
      message:'Category update successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
}