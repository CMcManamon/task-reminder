// Action creators for menu and ui

export const openForm = (val) => (dispatch) => {
  dispatch({ type: "OPEN_FORM", payload: val });
};

export const setCurrentId = (id) => (dispatch) => {
  dispatch({ type: "SET_TASK_ID", payload: id });
};
