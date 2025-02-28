import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  mail: {
    type: String,
    required: [true, "mail is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const Users = mongoose.model("Users", userSchema);
export default Users;
