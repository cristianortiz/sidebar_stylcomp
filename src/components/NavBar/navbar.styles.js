import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
  background: lightblue;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const NavBarIcon = styled(Link)`
  margin-left: 1.5rem;
  font-size: 2rem;
`;
