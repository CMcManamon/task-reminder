import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  comment: String,
  dueDate: {
    type: Date,
    default: new Date(),
  },
  duration: {
    type: Number,
    default: 7,
  },
  recurring: Boolean,
  priority: {
    type: Number,
    default: 0,
  },
});

export default taskSchema;
