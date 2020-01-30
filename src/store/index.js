import { createStore, combineReducers } from "redux";
import dialogReducer from "./reducers/dialogReducer";

const reducers = combineReducers({
  dialog: dialogReducer
});

export default createStore(reducers);
