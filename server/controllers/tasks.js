import Users from "../models/userModel.js";

export const getTasks = async (req, res) => {
  try {
    // ToDo: How to identify current user to pass in userID? Custom Hook?
    const tasks = await Users.find({ userID: "test" });
    console.log(tasks);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = (req, res) => {};

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
