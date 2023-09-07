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
  recurring: Boolean,
  period: {
    type: Number,
    default: 7,
  },
  periodType: {
    type: String,
    default: "repeat_days",
  },
  priority: {
    type: Number,
    default: 0,
  },
});

const TaskMessage = mongoose.model("TaskMessage", taskSchema);
export default TaskMessage;
