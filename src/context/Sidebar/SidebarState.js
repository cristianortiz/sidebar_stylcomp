import { useReducer } from "react";
import { ITEM_SELECTED, OPEN_SIDEBAR } from "../../types";
import SidebarContext from "./SidebarContext";
import SidebarReducer from "./SidebarReducer";

const SidebarState = (props) => {
  const initialState = {
    is_open: true,
    open_width: "250px",
    close_width: "60px",
    item_selected: null,
  };
  //dispatch to execute actions with useReducer hook relatives to sidebar
  const [state, dispatch] = useReducer(SidebarReducer, initialState);

  //to open and close sidebar based on click in the navbar toggle
  const setOpen = (value) => {
    dispatch({
      //type to handle show_form state prop, does not need a payload
      type: OPEN_SIDEBAR,
      payload: value,
    });
  };
  //to flag a menu item as selected when  has been clicked on it
  const itemSelected = (value) => {
    dispatch({
      //type to handle show_form state prop, does not need a payload
      type: ITEM_SELECTED,
      payload: value,
    });
  };

  //return the context provider, to get Sidebar data accesible for other components
  return (
    <SidebarContext.Provider
      value={{
        is_open: state.is_open,
        open_width: state.open_width,
        close_width: state.close_width,
        item_selected: state.item_selected,
        setOpen,
        itemSelected,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
