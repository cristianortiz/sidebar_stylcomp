import React from "react";
import {
  CardListItem,
  CardItemText,
  CardItemSubtext,
  CardBody,
  CardContainer,
  CardTitleFlex,
  CardTitleIcon,
} from "./cards.styles";

const BecasCards = ({ item }) => {
  return (
    <>
      <CardContainer block={true}>
        <CardTitleFlex>
          <h3>{item.nombre}</h3>
        </CardTitleFlex>
        <CardTitleIcon>{item.icon}</CardTitleIcon>
        <CardBody margin={true}>
          <CardListItem>
            <CardItemText>
              <h4>{item.periodo}</h4>
              <CardItemSubtext>Periodo Actual</CardItemSubtext>
            </CardItemText>
          </CardListItem>
          <CardListItem>
            <CardItemText>
              <h4>{item.becados}</h4>
              <CardItemSubtext>Alumnos Beneficiados</CardItemSubtext>
            </CardItemText>
          </CardListItem>
          <CardListItem>
            <CardItemText>
              <h4>$ {item.total_anual}</h4>
              <CardItemSubtext>Monto Anual Otorgado</CardItemSubtext>
            </CardItemText>
          </CardListItem>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default BecasCards;
