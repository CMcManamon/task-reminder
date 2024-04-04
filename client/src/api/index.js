import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const fetchTasks = (userID) =>
  axios.get(url, {
    params: {
      userID: userID,
    },
  });
export const createTask = (newTask) => axios.post(url, newTask);
export const updateTask = (id, updatedTask) =>
  axios.patch(`${url}/${id}`, updatedTask);
export const deleteTask = (id) => axios.delete(`${url}/${id}`);
