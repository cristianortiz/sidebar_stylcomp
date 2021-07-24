import React, { useContext } from "react";
import * as FaIcons from "react-icons/fa";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import { NavBarContainer, NavBarIcon } from "./navbar.styles";

const NavBar = () => {
  //destructurin props from sidebar context
  const { is_open, setOpen, window_width } = useContext(SidebarContext);
  //update sidebar state open/close when windoww is resized

  return (
    <>
      <NavBarContainer>
        <NavBarIcon to="#">
          <FaIcons.FaBars onClick={() => setOpen(!is_open, window_width)} />
        </NavBarIcon>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
