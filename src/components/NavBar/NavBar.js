import React, { useContext } from "react";
import * as FaIcons from "react-icons/fa";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import { NavBarContainer, NavBarIcon } from "./navbar.styles";

const NavBar = () => {
  //destructurin props from sidebar context
  const { is_open, setOpen } = useContext(SidebarContext);

  //const [sidebar, setSidebar] = useState(false);
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
