const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Connected to Database: ", connect.connection.host, connect.connection.name);
  } catch (error) {
    console.error("Error connecting to Database:", error);
  }
};

module.exports = connectToDatabase;
