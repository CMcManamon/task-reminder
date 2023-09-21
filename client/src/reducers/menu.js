const initialState = {
  openForm: false,
  editTaskId: null,
  openTaskOptions: false,
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case "OPEN_FORM":
      return { ...state, openForm: action.payload };
    case "SET_EDIT_ID":
      return { ...state, editTaskId: action.payload };
    case "OPEN_TASK_OPTIONS":
      return { ...state, openTaskOptions: action.payload };
    default:
      return state;
  }
}
