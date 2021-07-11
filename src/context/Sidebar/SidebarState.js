import { useReducer } from "react";
import { OPEN_SIDEBAR } from "../../types";
import SidebarContext from "./SidebarContext";
import SidebarReducer from "./SidebarReducer";

const SidebarState = (props) => {
  const initialState = {
    is_open: true,
    open_width: "250px",
    close_width: "60px",
    item_selected: false,
  };
  //dispatch to execute actions with useReducer hook relatives to sidebar
  const [state, dispatch] = useReducer(SidebarReducer, initialState);
  const setOpen = (value) => {
    dispatch({
      //type to handle show_form state prop, does not need a payload
      type: OPEN_SIDEBAR,
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
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
