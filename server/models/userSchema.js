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

const User = mongoose.model("User", userSchema);
export default User;
