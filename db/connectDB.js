import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/via-bruno-hashing-aassign-1");
    console.log("mongoose connceted");
  } catch (error) {
    console.log("not connected to db");
  }
};

export default connectDB;
