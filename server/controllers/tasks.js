import mongoose from "mongoose";
import TaskMessage from "../models/taskSchema.js";

export const getTasks = async (req, res) => {
  try {
    // ToDo: How to identify current user to pass in userID? Custom Hook?
    const tasks = await TaskMessage.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;

  const newTask = new TaskMessage(task);
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No task with that id");

  await TaskMessage.findByIdAndRemove(id);

  res.json({ message: "Task deleted successfully" });
};

/*
export const createUser = async (req, res) => {
  const user = req.body;

  const newUser = new Users(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
*/
