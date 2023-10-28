// Action creators for menu and ui

export const openForm = (val) => {
  return { type: "OPEN_FORM", payload: val };
};

export const setEditableTask = (task) => {
  return { type: "SET_EDITABLE_TASK", payload: task };
};

export const openTaskOptions = (val) => {
  return { type: "OPEN_TASK_OPTIONS", payload: val };
};
