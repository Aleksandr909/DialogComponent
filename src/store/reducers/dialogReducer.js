import { HANDLE_CHANGE, INPUT_HANDLER } from "../types";

const initialState = {
  values: ["", "", ""],
  selectedKeys: { name: 2, surname: 1, email: 0, phone: undefined }
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return { ...state, selectedKeys: action.payload };
    case INPUT_HANDLER:
      return { ...state, values: action.payload };

    default:
      return state;
  }
};
export default dialogReducer;
