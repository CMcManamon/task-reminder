import { combineReducers } from "redux";
import tasks from "./tasks";
import menu from "./menu";

export default combineReducers({
  tasks: tasks,
  menu: menu,
});
