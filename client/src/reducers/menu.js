const initialState = {
  openForm: false,
  currentTaskId: null,
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case "OPEN_FORM":
      return { ...state, openForm: action.payload };
    case "SET_TASK_ID":
      return { ...state, currentTaskId: action.payload };
    default:
      return state;
  }
}
