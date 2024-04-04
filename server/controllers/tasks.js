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
  const task = req.body;

  const newTask = new TaskMessage(task);
  try {
    await newTask.save();
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
