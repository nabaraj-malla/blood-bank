const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bloodBank");
    // console.log(`connected to Mongodb database ${mongoose.connection.host}`);
    console.log("databse connected successfully");
  } catch (error) {
    console.log(`Mongodb Databse Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
