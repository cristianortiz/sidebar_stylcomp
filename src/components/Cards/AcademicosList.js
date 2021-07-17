import React from "react";
import {
  CardContainer,
  CardTitle,
  CardBody,
  AcadListItem,
  AcadImage,
  AcadName,
  AcadRole,
} from "./cards.styles";

const AcademicosList = ({ academicosData }) => {
  console.log(academicosData);

  return (
    <>
      {academicosData.map((item, index) => {
        return (
          <CardContainer item={item} key={index} block={true}>
            {
              <CardTitle>
                <h3>{item.programa}</h3>
              </CardTitle>
            }
            <CardBody margin={true}>
              {item.academicos.map((item2, index) => {
                return (
                  <AcadListItem item2={item2} key={index}>
                    {<AcadImage>{item2.icon}</AcadImage>}
                    <AcadName>
                      <h4>{item2.nombre}</h4>
                      <AcadRole>{item2.perfil}</AcadRole>
                    </AcadName>
                  </AcadListItem>
                );
              })}
            </CardBody>
          </CardContainer>
        );
      })}
    </>
  );
};

export default AcademicosList;
