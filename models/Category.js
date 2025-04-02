const mongoose = require("mongoose");
const valid = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = mongoose.Schema({
  parent: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: false,
    validate: [valid.isURL, "wrong url"]
  },
  children: [
    {
      type: String,
    },
  ],
  description:{
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ["Show", "Hide"],
    default: "Show",
  },
  products: [{
    type: ObjectId,
    ref: "Products"
  }],
},{
  timestamps: true
});

const Category = mongoose.model('Category',categorySchema);
module.exports = Category;
