import { DATA } from "./action.types";

const reducer = (state, action) => {
  switch (action.type) {
    case DATA:
      return action.payload;
    default:
      return state;
  }
};
export default reducer;
