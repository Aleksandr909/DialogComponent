import { INPUT_HANDLER } from "../types";

const inputHandler = (event, values, index) => {
  const newValues = [...values];
  newValues[index] = event.target.value;

  return {
    type: INPUT_HANDLER,
    payload: newValues
  };
};
export default inputHandler;
