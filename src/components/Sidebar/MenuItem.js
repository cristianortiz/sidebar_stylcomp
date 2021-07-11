import React from "react";
import { Link } from "react-router-dom";
import {
  SidebarLink,
  SidebarLabel,
  SidebarListItem,
  SidebarIcon,
} from "./sidebar.styles";

const MenuItem = ({ item }) => {
  return (
    <>
      <SidebarListItem>
        <SidebarLink to={item.to}>
          <SidebarIcon> {item.icon}</SidebarIcon>
          <SidebarLabel>{item.title}</SidebarLabel>
        </SidebarLink>
      </SidebarListItem>
    </>
  );
};

export default MenuItem;
