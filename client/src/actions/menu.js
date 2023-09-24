// Action creators for menu and ui

export const openForm = (val) => (dispatch) => {
  dispatch({ type: "OPEN_FORM", payload: val });
};

export const setEditableTask = (task) => (dispatch) => {
  dispatch({ type: "SET_EDITABLE_TASK", payload: task });
};

export const openTaskOptions = (val) => (dispatch) => {
  dispatch({ type: "OPEN_TASK_OPTIONS", payload: val });
};
