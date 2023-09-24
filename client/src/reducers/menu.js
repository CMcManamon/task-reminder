const initialState = {
  openForm: false,
  editableTask: null,
  openTaskOptions: false,
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case "OPEN_FORM":
      return { ...state, openForm: action.payload };
    case "SET_EDITABLE_TASK":
      return { ...state, editableTask: action.payload };
    case "OPEN_TASK_OPTIONS":
      return { ...state, openTaskOptions: action.payload };
    default:
      return state;
  }
}
