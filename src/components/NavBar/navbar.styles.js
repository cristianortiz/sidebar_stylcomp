import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
  background-color: #ffffff;
  //background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  //border-bottom: 1px solid #d9dee4;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-shadow: 2px 6px 4px -4px rgba(0, 0, 0, 0.2);
`;

export const NavBarIcon = styled(Link)`
  margin-left: 1.5rem;
  font-size: 2rem;
  color: #303a5f;
`;
