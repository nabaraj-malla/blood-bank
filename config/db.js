const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb://localhost:27017/bloodBank");
    console.log(url);
    await mongoose.connect(url);
    // console.log(`connected to Mongodb database ${mongoose.connection.host}`);
    console.log("databse connected successfully");
  } catch (error) {
    console.log(`Mongodb Databse Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
