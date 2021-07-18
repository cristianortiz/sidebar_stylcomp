import React from "react";
import {
  AcadListItem,
  AcadName,
  AcadRole,
  CardBody,
  CardContainer,
  ProgramaCardTitle,
  ProgramaCardIcon,
} from "./cards.styles";

const ProgramasCards = ({ item }) => {
  return (
    <>
      <CardContainer block={true}>
        <ProgramaCardTitle>
          <h3>{item.nombre}</h3>
        </ProgramaCardTitle>
        <ProgramaCardIcon>{item.icon}</ProgramaCardIcon>
        <CardBody margin={true}>
          <AcadListItem>
            <AcadName>
              <h4>{item.matriculados} Alumnos</h4>

              <AcadRole>Matrícula Actual</AcadRole>
            </AcadName>
          </AcadListItem>
          <AcadListItem>
            <AcadName>
              <h4>{item.becados} Alumnos Becados</h4>
              <AcadRole>Matricula Actual</AcadRole>
            </AcadName>
          </AcadListItem>
          <AcadListItem>
            <AcadName>
              <h4>{item.graduados} Graduados</h4>
              <AcadRole>Desde su inicio</AcadRole>
            </AcadName>
          </AcadListItem>
          <AcadListItem>
            <AcadName>
              <h4>{item.coordinador}</h4>
              <AcadRole>Coordinador</AcadRole>
            </AcadName>
          </AcadListItem>
          <AcadListItem>
            <AcadName>
              <h4>Orientación {item.orientacion}</h4>
            </AcadName>
          </AcadListItem>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default ProgramasCards;
