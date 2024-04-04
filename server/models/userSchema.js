import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userID: String,
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TaskMessage",
    },
  ],
});

const Users = mongoose.model("Users", userSchema);
export default Users;
