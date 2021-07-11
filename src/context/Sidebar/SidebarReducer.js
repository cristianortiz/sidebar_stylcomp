import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        //sidebar_width: action.payload,
        is_open: action.payload,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        is_open: false,
      };

    default:
      return state;
  }
};
