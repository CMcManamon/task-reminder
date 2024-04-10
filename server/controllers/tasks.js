import mongoose from "mongoose";
import TaskMessage from "../models/taskSchema.js";
import User from "../models/userSchema.js";

export const getTasks = async (req, res) => {
  try {
    const userID = req.query.userID;
    let user = await User.findOne({ userID: userID });

    // If user doesn't exist in DB, create user from userID
    if (user === null) {
      user = new User({ userID: userID, tasks: [] });
      await user.save();
    }

    await user.populate("tasks");
    const tasks = user.tasks;
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const userID = req.body.userID;
  const task = req.body.task;

  try {
    // Query user from MongoDB
    const user = await User.findOne({ userID: userID });
    if (!user) throw new Error("User not found");
    // Create a task using the TaskMessage schema
    const newTask = new TaskMessage({ ...task, user: user._id });
    await newTask.save();
    // Add task to user's task array
    user.tasks.push(newTask);
    await user.save();
    // Return task with success code
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id: _id } = req.params;
  const task = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No task with that id");
  }

  const updatedTask = await TaskMessage.findByIdAndUpdate(_id, task, {
    new: true,
  });

  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No task with that id");

  const taskToDelete = await TaskMessage.findOne({ _id: id });
  const user = await taskToDelete.populate("user");

  // Remove task from user's task array
  user.user.tasks = user.user.tasks.filter(
    (task) => task.toString() != taskToDelete._id.toString()
  );

  await user.user.save();

  await TaskMessage.findByIdAndRemove(id);

  res.json({ message: "Task deleted successfully" });
};
