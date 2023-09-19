// Action creators for menu and ui

export const openForm = (val) => (dispatch) => {
  dispatch({ type: "OPEN_FORM", payload: val });
};

export const setEditId = (id) => (dispatch) => {
  dispatch({ type: "SET_EDIT_ID", payload: id });
};
