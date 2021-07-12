import React, { useContext } from "react";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import {
  SidebarLink,
  SidebarLabel,
  SidebarListItem,
  SidebarIcon,
} from "./sidebar.styles";

const MenuItem = ({ item }) => {
  const { itemSelected } = useContext(SidebarContext);
  return (
    <>
      <SidebarListItem>
        <SidebarLink to={item.to} activeClassName="selected">
          <SidebarIcon> {item.icon}</SidebarIcon>
          <SidebarLabel>{item.title}</SidebarLabel>
        </SidebarLink>
      </SidebarListItem>
    </>
  );
};

export default MenuItem;
