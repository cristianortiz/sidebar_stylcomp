import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import IconComponent from "../../config/IconComponent";
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



const AcademicosList = ({claustrosProgramas}) => {
 
  return (
    <>
      {claustrosProgramas.map((item, index) => {
        return (
          <CardContainer item={item} key={index} block={true}>
            {
              <CardTitleFlex>
                <h3>{item.nombre_programa}</h3>
              </CardTitleFlex>
            }
            <CardTitleIcon><IconComponent name={item.icon} /></CardTitleIcon>
            <CardBody margin={true}>
              {item.academicos.map((item2, index) => {
                return (
                  <CardListItem item2={item2} key={index}>
                    <CardItemImage><FaIcons.FaUsers /></CardItemImage>
                    <CardItemText>
                      <h4>{item2.nombre}</h4>
                      <CardItemSubtext>{item2.categoria}</CardItemSubtext>
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
