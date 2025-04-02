require('dotenv').config();
const mongoose = require('mongoose');
const { secret } = require('./secret');

mongoose.set('strictQuery', false);

// it is local url 
const DB_URL = 'mongodb://127.0.0.1:27017/hamart';
// it is mongodb url
const MONGO_URI = secret.db_url;

const connectDB = async () => {
  try { 
    await mongoose.connect(MONGO_URI);
    console.log('mongodb connection success!');
  } catch (err) {
    console.log('mongodb connection failed!', err.message);
  }
};

module.exports = connectDB;
