import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const fetchTasks = (userID) =>
  axios.get(url, {
    params: {
      userID: userID,
    },
  });
export const createTask = (userID, newTask) =>
  axios.post(url, { userID: userID, task: newTask });
export const updateTask = (id, updatedTask) =>
  axios.patch(`${url}/${id}`, updatedTask);
export const deleteTask = (id) => axios.delete(`${url}/${id}`);
