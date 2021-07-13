import React from "react";
import {
  CardBody,
  CardContainer,
  CardIcon,
  CardNumber,
  CardTitle,
} from "./cards.styles";

const Cards = ({ item }) => {
  return (
    <>
      <CardContainer>
        <CardBody>
          <CardNumber>{item.numero}</CardNumber>
          <CardTitle>{item.titulo}</CardTitle>
        </CardBody>
        <CardIcon>{item.icon}</CardIcon>
      </CardContainer>
    </>
  );
};

export default Cards;
