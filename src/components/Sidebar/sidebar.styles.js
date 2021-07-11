import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  //width: var(--sidebar-width);
  width: ${(props) => (props.is_open ? "250px" : "60px")};
  position: fixed;
  background: #003147;
  color: #fff;
  height: 100%;
  /* top: 0;
  left: 0; */
  overflow: hidden;
  transition: 0.2s ease-in all;
`;
export const SidebarHeader = styled.div`
  position: relative;
  height: 60px;
  border-bottom: 1px solid lightblue;
  margin-bottom: 10px;
  display: flex;
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
  &:hover {
    background: #03a9f4;
    //border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

export const SidebarLink = styled(Link)`
  position: relative;
  //display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #fff;
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
