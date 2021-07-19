import { useReducer } from "react";
import { HIDE_SIDEBAR, OPEN_SIDEBAR } from "../../types";
import SidebarContext from "./SidebarContext";
import SidebarReducer from "./SidebarReducer";

const SidebarState = (props) => {
  const initialState = {
    is_open: true,
    open_width: "250px",
    close_width: "60px",
    hide_sidebar: false,
  };
  //dispatch to execute actions with useReducer hook relatives to sidebar
  const [state, dispatch] = useReducer(SidebarReducer, initialState);

  //to open and close sidebar based on click in the navbar toggle
  const setOpen = (value) => {
    console.log(value);
    dispatch({
      type: OPEN_SIDEBAR,
      payload: value,
    });
  };
  const setHideSidebar = (value) => {
    console.log(value);
    dispatch({
      type: HIDE_SIDEBAR,
      payload: value,
    });
  };
  //return the context provider, to get Sidebar data accesible for other components
  return (
    <SidebarContext.Provider
      value={{
        is_open: state.is_open, //true if the sidebar is open
        open_width: state.open_width, //sidebar width when is open
        close_width: state.close_width, //sidebar width when is closed
        hide_sidebar: state.hide_sidebar, //to hide sidebar for complete
        setOpen, //to set is_open true or false and open or close the sidebar
        setHideSidebar,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
