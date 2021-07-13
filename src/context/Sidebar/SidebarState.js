import { useReducer } from "react";
import { OPEN_SIDEBAR } from "../../types";
import SidebarContext from "./SidebarContext";
import SidebarReducer from "./SidebarReducer";

const SidebarState = (props) => {
  const initialState = {
    is_open: true,
    open_width: "250px",
    close_width: "60px",
  };
  //dispatch to execute actions with useReducer hook relatives to sidebar
  const [state, dispatch] = useReducer(SidebarReducer, initialState);

  //to open and close sidebar based on click in the navbar toggle
  const setOpen = (value) => {
    dispatch({
      type: OPEN_SIDEBAR,
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
        setOpen, //to set is_open true or false and open or close the sidebar
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
