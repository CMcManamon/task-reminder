import { combineReducers } from "redux";
import tasks from "./tasks";
import menu from "./menu";
import auth from "./auth";

export default combineReducers({
  tasks: tasks,
  menu: menu,
  auth: auth,
});
