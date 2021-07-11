import React, { useState, useContext } from "react";
import SidebarContext from "../../context/Sidebar/SidebarContext";
import { sidebarData, header } from "./sidebarData";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarIcon,
  SidebarLabel,
  SidebarNav,
} from "./sidebar.styles";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  //sidebar context to access ther global props
  const sidebar_context = useContext(SidebarContext);
  //destructurin props from sidebar context
  const { is_open } = sidebar_context;

  return (
    <>
      <SidebarContainer is_open={is_open}>
        <SidebarHeader>
          <SidebarIcon>{header.icon}</SidebarIcon>
          <h3>
            <SidebarLabel>{header.title}</SidebarLabel>
          </h3>
        </SidebarHeader>
        <SidebarNav>
          {sidebarData.map((item, index) => {
            return <MenuItem item={item} key={index} />;
          })}
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
