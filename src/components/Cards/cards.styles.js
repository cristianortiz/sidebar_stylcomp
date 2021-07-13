import styled from "@emotion/styled";
//import { Link, NavLink } from "react-router-dom";

export const CardsBox = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardContainer = styled.div`
  position: relative;
  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 2px 5px 4px -2px rgba(0, 0, 0, 0.2);
`;

export const CardBody = styled.div`
  display: block;
`;

export const CardNumber = styled.div`
  position: relative;
  font-size: 2em;
  font-weight: 400;
  color: #1d3146;
`;
export const CardTitle = styled.div`
  color: #6c757d;
  font-size: 1em;
`;
export const CardIcon = styled.div`
  display: inline-block;
  font-size: 2em;
  color: #5387c5;
`;
