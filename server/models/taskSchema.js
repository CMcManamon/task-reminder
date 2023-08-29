import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  comment: String,
  creationDate: {
    type: Date,
    default: new Date(),
  },
  dueDate: {
    type: Date,
    default: new Date(),
  },
  period: {
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
