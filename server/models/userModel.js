import mongoose from "mongoose";
import taskSchema from "./taskSchema.js";

const userSchema = new mongoose.Schema({
  userID: String,
  username: String,
  password: String,
  tasks: [taskSchema],
});

const Users = mongoose.model("Users", userSchema);
export default Users;
