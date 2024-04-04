import * as api from "../api";

// These action creator functions return async functions
// Thunk (store middleware) intercepts and calls the function
//    when it's passed into dispatch elsewhere in the program
//    e.g. dispatch(createTask(task)) in NewTask.js
export const getTasks = (userID) => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks(userID);
    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    const { data } = await api.createTask(task);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (id, task) => async (dispatch) => {
  try {
    const { data } = await api.updateTask(id, task);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.deleteTask(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
