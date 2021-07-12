import { OPEN_SIDEBAR, ITEM_SELECTED } from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        //sidebar_width: action.payload,
        is_open: action.payload,
      };
    case ITEM_SELECTED:
      return {
        ...state,
        //sidebar_width: action.payload,
        item_selected: action.payload,
      };

    default:
      return state;
  }
};
