// @flow
import { HANDLE_CHANGE } from "../types";

const handleChange = (event, selectedKeys, index: number) => {
  const inputSelectedValue = Object.values(selectedKeys).findIndex(
    elem => elem === index
  );
  const rowSelectedValue = Object.keys(selectedKeys)[inputSelectedValue];

  return {
    type: HANDLE_CHANGE,
    payload: {
      ...selectedKeys,
      [event.target.value]: index,
      [rowSelectedValue]: undefined
    }
  };
};
export default handleChange;
