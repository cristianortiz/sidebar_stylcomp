import React from "react";
import {
  CardContainer,
  CardBody,
  CardTitleFlex,
  CardTitleIcon,
  CardListItem,
  CardItemImage,
  CardItemText,
  CardItemSubtext,
} from "./cards.styles";

const AcademicosList = ({ academicosData }) => {
  console.log(academicosData);

  return (
    <>
      {academicosData.map((item, index) => {
        return (
          <CardContainer item={item} key={index} block={true}>
            {
              <CardTitleFlex>
                <h3>{item.programa}</h3>
              </CardTitleFlex>
            }
            <CardTitleIcon>{item.icon}</CardTitleIcon>
            <CardBody margin={true}>
              {item.academicos.map((item2, index) => {
                return (
                  <CardListItem item2={item2} key={index}>
                    {<CardItemImage>{item2.icon}</CardItemImage>}
                    <CardItemText>
                      <h4>{item2.nombre}</h4>
                      <CardItemSubtext>{item2.perfil}</CardItemSubtext>
                    </CardItemText>
                  </CardListItem>
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
