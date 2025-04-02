require('dotenv').config();
const connectDB = require('./config/db');

const User = require('./models/User');
const userData = require('./utils/user');

const Coupon = require('./models/Coupon');
const couponData = require('./utils/coupon');

const Order = require('./models/Order');
const orderData = require('./utils/order');

const productData = require('./utils/products');
const Product = require('./models/Product');

const Category = require('./models/Category');
const categoryData = require('./utils/categories');

const Brand = require('./models/Brand');
const brandData = require('./utils/brands');

const Admin = require('./models/Admin');
const adminData = require('./utils/admin');

connectDB();
const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(userData);

    await Product.deleteMany();
    await Product.insertMany(productData);

    await Category.deleteMany();
    await Category.insertMany(categoryData);

    await Coupon.deleteMany();
    await Coupon.insertMany(couponData);

    await Order.deleteMany();
    await Order.insertMany(orderData);

    await Brand.deleteMany();
    await Brand.insertMany(brandData);

    await Admin.deleteMany();
    await Admin.insertMany(adminData);

    console.log('data inserted successfully!');
    process.exit();
  } catch (error) {
    console.log('error', error);
    process.exit(1);
  }
};

importData();
