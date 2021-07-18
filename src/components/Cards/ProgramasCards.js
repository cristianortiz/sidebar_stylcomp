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

const ProgramasCards = ({ item }) => {
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
              <h4>{item.matriculados} Alumnos</h4>

              <CardItemSubtext>Matrícula Actual</CardItemSubtext>
            </CardItemText>
          </CardListItem>
          <CardListItem>
            <CardItemText>
              <h4>{item.becados} Alumnos Becados</h4>
              <CardItemSubtext>Matricula Actual</CardItemSubtext>
            </CardItemText>
          </CardListItem>
          <CardListItem>
            <CardItemText>
              <h4>{item.graduados} Graduados</h4>
              <CardItemSubtext>Desde su inicio</CardItemSubtext>
            </CardItemText>
          </CardListItem>
          <CardListItem>
            <CardItemText>
              <h4>{item.coordinador}</h4>
              <CardItemSubtext>Coordinador</CardItemSubtext>
            </CardItemText>
          </CardListItem>
          <CardListItem>
            <CardItemText>
              <h4>Orientación {item.orientacion}</h4>
            </CardItemText>
          </CardListItem>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default ProgramasCards;
