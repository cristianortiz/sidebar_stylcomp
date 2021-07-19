import React, { useContext, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import { NavBarContainer, NavBarIcon } from "./navbar.styles";

const NavBar = () => {
  //destructurin props from sidebar context
  const { is_open, setOpen, setHideSidebar } = useContext(SidebarContext);
  //update sidebar state open/close when windoww is resized
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 992) {
        setHideSidebar(true);
        setOpen(false);
      } else setHideSidebar(false);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [is_open]);

  return (
    <>
      <NavBarContainer>
        <NavBarIcon to="#">
          <FaIcons.FaBars onClick={() => setOpen(!is_open)} />
        </NavBarIcon>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
