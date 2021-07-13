import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: ${(props) => (props.is_open ? props.open_width : props.close_width)};
  position: fixed;
  color: #fff;
  height: 100%;
  background: #29405c;
  overflow: hidden;
  transition: 0.2s ease-in all;
`;
export const SidebarHeader = styled.div`
  position: relative;
  //height: 80px;
  display: flex;
  background: #1d3146;
  //padding-top: 8px;
`;
export const SidebarNav = styled.ul`
  width: 100%;
  top: 0;
  left: 0px;
`;
export const SidebarListItem = styled.li`
  position: relative;
  width: 100%;
  list-style: none;
`;

export const SidebarLink = styled(NavLink)`
  position: relative;
  //display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: lightgray;

  &:hover {
    color: #fff;

    cursor: pointer;
  }
  //set style for a selected menu item
  &.${(props) => props.activeClassName} {
    // background: rgba(132, 175, 245, 0.8);
    background: #42648d;
    color: #fff;
    transition: 0.1s ease-in all;
    border-left: 4px solid coral;
  }
`;
export const SidebarLabel = styled.span`
  position: relative;
  display: block;
  padding: 0 0 0px 10px;
  height: 60px;
  line-height: 60px;
  white-space: nowrap;
`;
export const SidebarIcon = styled.span`
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 1.5rem;
  /* &:hover {
    color: #632ce4;
    //border-left: 4px solid #632ce4;
  } */
`;
