const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.MONGO_URL;
console.log(url);

const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb://localhost:27017/bloodBank");
    // await mongoose
    //   .connect
    // "mongodb+srv://newUser:QUmQq4fKeKVnpvTT@cluster0.ly5tjke.mongodb.net/college?retryWrites=true&w=majority&appName=Cluster0"
    // "mongodb+srv://nabarajmalla4000:Atl@s2057@cluster0.ly5tjke.mongodb.net/college?retryWrites=true&w=majority&appName=Cluster0"

    // "mongodb+srv://nabarajmalla4000:thakuri12000@cluster0.ly5tjke.mongodb.net/demobloodbank?retryWrites=true&w=majority&appName=Cluster0"
    // ();

    // console.log(url);
    await mongoose.connect(url);
    // console.log(`connected to Mongodb database ${mongoose.connection.host}`);
    console.log("databse connected successfully");
  } catch (error) {
    console.log(`Mongodb Databse Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
