import { HIDE_SIDEBAR, OPEN_SIDEBAR } from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        //sidebar_width: action.payload,
        is_open: action.payload,
      };
    case HIDE_SIDEBAR:
      return {
        ...state,
        hide_sidebar: action.payload,
      };

    default:
      return state;
  }
};
